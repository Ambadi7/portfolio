import { useState,useEffect } from "react"
import Loading_Screen from "./components/Loading_Screen"
import MainContent from "./components/MainContent"


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
        {/* loading screen and main content */}
        { loaded ? <Loading_Screen/> :<MainContent/>}
      </div>
      
    </>
  )
}

export default App
