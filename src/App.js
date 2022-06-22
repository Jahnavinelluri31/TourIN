import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Travel from './components/Travel'
import Contactus from './components/Contactus'
import Divinedestinations from './components/Destinations/Divinedestinations'
import Hillstations from './components/Destinations/Hillstations'
import Beaches from './components/Destinations/Beaches'
import Monuments from './components/Destinations/Monuments'
import Wildlife from './components/Destinations/Wildlife'
import Profile from './components/Profile'
import Registration from './components/Registration'
function App() {
  return (
    <div>
      <Navbar />
      {/*Define routes for children */}
      <Routes>
        {/*Define route for Home component */}
        <Route path="/" element={<Home />} />

        {/*Define route for Home component */}
        <Route path="/about" element={<About />} />

        {/*Define route for Devine destinations component */}
        <Route path="/divine" element={<Divinedestinations/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/hills" element={<Hillstations/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/beaches" element={<Beaches/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/monuments" element={<Monuments/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/wildlife" element={<Wildlife/>} />

        {/*Define route for Travel component */}
        <Route path="/travel" element={<Travel />} />

        {/*Define route for Contactus component */}
        <Route path="/contactus" element={<Contactus />} />

        {/*Define route for Profile component */}
        <Route path="/profile" element={<Profile />} />

        {/*Define route for Registration component */}
        <Route path="/profile/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;