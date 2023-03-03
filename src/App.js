import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contect/Contact';
const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/service' element={<Service />} />
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
    </Router>
</>
  )
}

export default App;