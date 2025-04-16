import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [extendNavbar,setExtendNavbar] = useState(false)
  return (
    <div className={`px-10 md:px-8  backdrop-blur-[3px] border-b border-fuchsia-950 w-full h-16  fixed top-0 left-0 right-0 z-100 flex justify-between md:items-center transition-all duration-500 ${extendNavbar ? "h-80" : "h-16 "}`}>
        <div className={`flex h-16 items-center gap-4 font-source-code-pro text-xl text-white`}>
          <h1>Logo </h1>
          <NavLink to="">Ambadi</NavLink>
        </div>
        <div className={` absolute md:static flex flex-col md:flex-row gap-6 font-poppins text-gray-300 transition-all duration-500 ${extendNavbar ? "top-18 left-[82vw]" : "top-18 left-[900px] "}`}>
          <NavHashLink to="#home">Home</NavHashLink>
          <NavHashLink to="#about">About</NavHashLink>
          <NavHashLink to="#projects">Projects</NavHashLink>
          <NavHashLink to="#skills">Skills</NavHashLink>
          <NavHashLink to="#contact">Contact</NavHashLink>

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