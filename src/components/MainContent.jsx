import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'
import Footer from './Footer'

const MainContent = () => {
  return (
    <div>
         <div className=" bg-black text-white ">
       {/* Navbar -------------------------- */}
        <div className="">
          <Navbar/>
        </div>
        {/* Body --------------------------- */}
        <div className="flex flex-col gap-6 pt-22 px-3 md:px-18 pb-6">
          <div className='text-white'>
            <Home/>
          </div>
          <div>
            <About/>
          </div>
          <div>
            <Projects/>
          </div>
          <div>
            <Skills/>
          </div>
          <div>
            <Contact/>
          </div>
        </div>
        {/* Footer ------------------------- */}
        <div className="">
          <Footer/>
        </div>
        
        
        
        
        
        
        
      </div>
    </div>
  )
}

export default MainContent