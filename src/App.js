import React, {useState} from 'react'
import Dropdown from './components/Dropdown';

import Navbar from './components/Navbar';

import GlobalStyle from './globalStyle';


import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './components/Home';

import './styles/App.css'

// import Services from './components/Services'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
     <GlobalStyle/>
     <Navbar toggle={toggle} />
     <Dropdown isOpen={isOpen} toggle={toggle} />
     
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </>
  );
}

export default App;
