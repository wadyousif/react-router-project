import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes> 
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<h1>page ont found</h1>} />
        </Routes>
    </Router>
  );
}
export default App;
