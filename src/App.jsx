import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Challenge from './pages/Challenge'
import Journey from './pages/Journey'
import Awards from './pages/Awards'
import Partners from './pages/Partners'
import Resources from './pages/Resources'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
