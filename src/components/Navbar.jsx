import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState,useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const logo = "</>"
  const [navbg,setNavbg]=useState(true)
  const [extendNavbar,setExtendNavbar] = useState(false)

  useEffect(()=>{
    const navTimer = setTimeout(()=>{
      setNavbg(false);

    },2500);

    return()=> clearTimeout(navTimer)
  },[]);
  return (
    <div className={`px-10 md:px-8  backdrop-blur-[3px] border-b border-sky-400 shadow-[0_0_10px_#38bdf8]  w-full h-16  fixed top-0 left-0 right-0 z-100 flex justify-between md:items-center transition-all duration-500 ${extendNavbar ? "h-80" : "h-16 "} ${navbg ? " bg-sky-400":""}`}>
        <div className={`flex h-16 items-center gap-4 font-source-code-pro text-xl text-white`}>
          <h1 className=' stroke-2 stroke-sky-400'>{logo}</h1>
          <NavLink to="">Ambadi</NavLink>
        </div>
        <div className={` absolute md:static flex flex-col md:flex-row gap-6 font-poppins text-gray-300 transition-all duration-500 ${extendNavbar ? "top-18 left-[82vw]" : "top-18 left-[900px] "}`}>
          <NavHashLink to="#home" className="hover:text-sky-400 hover:underline underline-offset-2 hover:scale-110 ">Home</NavHashLink>
          <NavHashLink to="#about" className="hover:text-sky-400 hover:underline underline-offset-2 hover:scale-110 ">About</NavHashLink>
          <NavHashLink to="#projects" className="hover:text-sky-400 hover:underline underline-offset-2 hover:scale-110 ">Projects</NavHashLink>
          <NavHashLink to="#skills" className="hover:text-sky-400 hover:underline underline-offset-2 hover:scale-110 ">Skills</NavHashLink>
          <NavHashLink to="#contact" className="hover:text-sky-400 hover:underline underline-offset-2 hover:scale-110 ">Contact</NavHashLink>

        </div>
        <div className='md:hidden h-16 items-center flex'>
          {/* menu icon */}
          <div className='' onClick={()=>{setExtendNavbar(open=>!open)}}>
            { extendNavbar ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/> } 
          </div>
        </div>
    </div>
  )
}

export default Navbar