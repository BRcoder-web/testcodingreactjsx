import Header from './components/Header'
import Home from './Page/Home'
import Course from './Page/Course'
import About from './Page/About'
import Contact from './Page/Contact'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
       <Footer/> 
     </BrowserRouter>
  )
}

export default App
