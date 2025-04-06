import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { easeInOut } from 'framer-motion/dom';

const Home = () => {
  const [isVisible,setIsVisible] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsVisible(false);
    },2600);

    return () => clearTimeout(timer);
  },[]);
  return (
    <div
     
     className="flex flex-col md:flex-row p-5  gap-5 h-[700px] md:h-[500px] w-full rounded-xl">
      {/* LEFT Details*/}
      <motion.div
       initial={{ x: -80, opacity : 0 }}
       whileInView={{opacity : 1, x:0}}
       transition={{
       duration: 2,
       ease: 'easeOut',
       }}
       viewport={{once:true}}
       className="flex flex-col justify-center gap-10 w-full md:w-[500px] lg:w-[600px] h-full rounded font-Ubuntu-mono p-4">
        {/* 1 */}
        <div className='text-3xl'>
        <motion.div 
        initial={{opacity :1}}
        animate={{opacity : isVisible ? 1:0}}
        transition={{duration :2, ease:'easeInOut'
        }}
        >
          {isVisible && <h1>Welcome!</h1>}
        </motion.div>
        <div className='flex gap-3'>
          <div>
            <h1>Hi!</h1>
          </div>
          <motion.div 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{delay:1}}
           viewport={{once:true}}
          >
            <h1>I'm</h1>
          </motion.div>
          <div className='flex'>
            <motion.h1 
            initial={{y:10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:1.5}}
            viewport={{once:true}}
            >A</motion.h1>
            <motion.h1
            initial={{y:-10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:1.8}}
            viewport={{once:true}}
            >m</motion.h1>
            <motion.h1
            initial={{y:10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:2.1}}
            viewport={{once:true}}
            >b</motion.h1>
            <motion.h1
            initial={{y:-10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:2.4}}
            viewport={{once:true}}
            >a</motion.h1>
            <motion.h1
            initial={{y:10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:2.7}}
            viewport={{once:true}}
            >d</motion.h1>
            <motion.h1
            initial={{y:-10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:3}}
            viewport={{once:true}}
            >i</motion.h1> 
            <motion.h1 
            initial={{x:10,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:3.3}}
            viewport={{once:true}}
             className='pl-3'>K R</motion.h1>
          </div>  
        </div>

        </div>
        {/* 2 */}
        <div className='text-3xl md:text-5xl '>
          <h1>Software Engineer</h1>
        </div>
        {/* 3 */}
        <div className='flex gap-4 h-auto items-center'>
          <button className='border p-2 px-4 text-xl border-fuchsia-950  rounded-md focus:bg-fuchsia-950 hover:bg-fuchsia-950 hover:scale-105 '>Download CV <FileDownloadOutlinedIcon/></button>
          <div className='flex gap-2'>
            <div className='hover:scale-110'>
              <GitHubIcon/>
            </div>
            <div className='hover:scale-110'>
              <LinkedInIcon/>
            </div>
            <div className='hover:scale-110'>
              <EmailIcon/> 
            </div>
 
          </div>
        </div>
      </motion.div>
      {/* RIGHT image*/}
      <motion.div
       initial={{ x: 80, opacity : 0 }}
       whileInView={{opacity : 1, x:0}}
       animate={{scale:[0.4,0.6,0.7]}}
       transition={{
       duration: 2,
       ease: 'easeOut',
       }}
       viewport={{once:true}}
       className="flex justify-center w-full md:w-[500px] lg:w-[600px]  h-auto rounded  ">
        <img src="/images/home2.jpg" className=' h-auto md:h-[450px] lg:h-[480px] object-contain shadow-2xl shadow-fuchsia-950 rounded-md'  alt="" />
      </motion.div>
        
    </div>
  )
}

export default Home