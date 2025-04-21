import { useState,useEffect } from "react"
import Footer from "./components/Footer"
import Loading_Screen from "./components/Loading_Screen"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"



function App() {
  const [loaded,setLoaded]=useState(true)

  useEffect(()=>{
      const loadedTimer = setTimeout(()=>{
        setLoaded(false);
      },2400);
  
      return () => clearTimeout(loadedTimer);
    },[]);
  return (
    <>

      <div className=" bg-black ">
        { loaded ? <Loading_Screen/> :<MainContent/>}
      </div>
      
      
      

      {/* <div className=" bg-black text-white ">
       
        <div className="">
          <Navbar/>
        </div>
       
        <div className="flex flex-col gap-6 pt-22 px-3 md:px-18 pb-6">
          <div>
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
        
        <div className="">
          <Footer/>
        </div>
        
        
        
        
        
        
        
      </div> */}
      
    </>
  )
}

export default App
