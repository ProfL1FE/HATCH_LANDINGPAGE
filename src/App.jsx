import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ComingSoon from './components/ComingSoon'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Join from './pages/Join'
import Journey from './pages/Journey'
import Awards from './pages/Awards'
import Partners from './pages/Partners'

/**
 * Routes live in their own component so they can use router hooks
 * (useNavigate / useLocation) while still sitting inside <BrowserRouter>.
 * This is what wires the Resources → Login → Resources access loop:
 * an unauthenticated download sends the user to /login carrying the
 * resource title, and a successful sign-in returns them to /resources
 * with that resource surfaced as unlocked.
 */
function AppRoutes() {
  const navigate = useNavigate()
  const location = useLocation()
  const pendingResource = location.state?.pendingResource ?? null

  function handleRequireAuth(resourceTitle) {
    navigate('/login', { state: { pendingResource: resourceTitle } })
  }

  function handleSignedIn() {
    // After the brief "ACCESS CONFIRMED" state, return the user to Resources —
    // now signed in — and pass back the resource they came for so the page can
    // surface it as unlocked.
    window.setTimeout(() => {
      navigate('/resources', pendingResource ? { state: { unlocked: pendingResource } } : undefined)
    }, 1400)
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        {/* No existing route matches this page yet — added as new. Team:
            please confirm this shouldn't instead live at /opportunities
            or /ecosystem before merging (see PR description). */}
        <Route path="/awards" element={<Awards />} />
        <Route path="/opportunities" element={<ComingSoon title="Opportunities" />} />
        <Route path="/ecosystem" element={<ComingSoon title="Ecosystem" />} />
        <Route path="/resources" element={<Resources onRequireAuth={handleRequireAuth} />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/login" element={<Login pendingResource={pendingResource} onSignedIn={handleSignedIn} />} />
        <Route path="/join" element={<Join />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="/terms" element={<ComingSoon title="Terms of Use" />} />
        <Route path="/cookies" element={<ComingSoon title="Cookie Policy" />} />
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
