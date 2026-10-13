
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Hero from './Hero'
import Dashboard from './Dashboard'
import Placements from './Placements'
import Applications from './Applications'
import Profile from './Profile'

function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/placements"
          element={<Placements />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />
	<Route path="/profile" element={<Profile />} /><Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
