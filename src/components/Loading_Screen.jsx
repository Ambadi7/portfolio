import React from 'react'
import { useState,useEffect } from 'react'
import CodeLoading from './CodeLoading';
import { motion } from 'framer-motion';

const Loading_Screen = () => {
  const [background,setBackground] = useState(false)

  // useeffect for activation of background color  blue
  useEffect(()=>{
    const backgroundTimer = setTimeout(()=>{
      setBackground(true);
    },1800);

    return () => clearTimeout(backgroundTimer);
  },[]);
  return (
    <div className='bg-black h-screen'>
      {/* blue screen animation and loading screen */}
      <motion.div 
      initial={{}}
      animate={{height:"4rem"}}
      transition={{delay:2,duration:0.43, ease:`easeIn`}}
      className={`flex justify-center items-center  h-screen w-full  text-xl ${background ? "bg-sky-400":""}`}>
          <div className={`${background ? "hidden":"flex"}`}>
              <CodeLoading/>
          </div>
      </motion.div>
    </div>
      
  )
}

export default Loading_Screen