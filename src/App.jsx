import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"


function App() {
  

  return (
    <>
      <div className=" bg-black text-white ">
       {/* Navbar -------------------------- */}
        <div className="">
          <Navbar/>
        </div>
        {/* Body --------------------------- */}
        <div className="flex flex-col gap-6 pt-22 px-10 md:px-18 pb-6">
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
        {/* Footer ------------------------- */}
        <div className="">
          <Footer/>
        </div>
        
        
        
        
        
        
        
      </div>
      
    </>
  )
}

export default App
