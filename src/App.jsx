import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ComingSoon from './components/ComingSoon'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<ComingSoon title="Journey" />} />
          <Route path="/opportunities" element={<ComingSoon title="Opportunities" />} />
          <Route path="/ecosystem" element={<ComingSoon title="Ecosystem" />} />
          <Route path="/resources" element={<ComingSoon title="Resources" />} />
          <Route path="/partners" element={<ComingSoon title="Partners" />} />
          <Route path="/login" element={<ComingSoon title="Login" />} />
          <Route path="/join" element={<ComingSoon title="Join HATCH" />} />
          <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="/terms" element={<ComingSoon title="Terms of Use" />} />
          <Route path="/cookies" element={<ComingSoon title="Cookie Policy" />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
