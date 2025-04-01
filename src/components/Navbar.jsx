import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';

const Navbar = () => {
  const [extendNavbar,setExtendNavbar] = useState(false)
  return (
    <div className={`px-15 md:px-8  backdrop-blur-[2px] border-b border-fuchsia-950 w-full h-16  fixed top-0 left-0 z-50 flex justify-between md:items-center transition-all duration-500 ${extendNavbar ? "h-80" : "h-16 "}`}>
        <div className={`flex h-16 items-center gap-4 font-source-code-pro text-xl text-white`}>
          <h1>Logo </h1>
          <h1>Ambadi</h1>
        </div>
        <div className={` absolute md:static flex flex-col md:flex-row gap-6 text-gray-300 transition-all duration-500 ${extendNavbar ? "top-18 left-96" : "top-18 left-[600px] "}`}>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Projects</h2>
          <h2>Skills</h2>
          <h2>Contact</h2>

        </div>
        <div className='md:hidden h-16 items-center flex'>
          <div className='' onClick={()=>{setExtendNavbar(open=>!open)}}>
            { extendNavbar ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/> } 
          </div>
        </div>
    </div>
  )
}

export default Navbar