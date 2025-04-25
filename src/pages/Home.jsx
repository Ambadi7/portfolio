import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '/src/assets/Ambadi_K_R.pdf'


const Home = () => {
  const [isVisible,setIsVisible] = useState(true)

  // This for welcome blink

  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsVisible(false);
    },2500);

    return () => clearTimeout(timer);
  },[]);
  return (
    <div
     
     id='home' className="flex flex-col md:flex-row p-5  gap-5 h-[600px] md:h-[500px] w-full rounded-xl">
      {/* LEFT Details*/}
      <motion.div
       initial={{ x: -80, opacity : 0 }}
       whileInView={{opacity : 1, x:0}}
       transition={{
       duration: 2,
       ease: 'easeOut',
       }}
       viewport={{once:true}}
       className="flex flex-col items-center md:items-start md:justify-center gap-8 md:gap-10 w-full md:w-[500px] lg:w-[600px] h-full rounded font-Ubuntu-mono p-4">
        {/*Left 1 */}
        <div className='text-2xl md:text-3xl'>
          {/* welcome Displaying */}
          {isVisible && 
            <motion.div 
              initial={{opacity :1}}
              animate={{opacity : isVisible ? 1:0}}
              transition={{duration :2, ease:'easeInOut'
              }}
              >
                <h1>Welcome!</h1>
            </motion.div>
          }
        
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
            {/* Name Running */}
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
        {/*Left 2 */}
        <div className='flex gap-4 text-3xl text-center md:text-start md:text-5xl '>
          <h1>Software</h1><h1 className={`${isVisible ? " text-white" : " text-sky-500"}`}>Developer</h1>
        </div>
        {/* Left 3 */}
        <div className='flex flex-col md:flex-row gap-4 h-auto items-center'>
          <button  className='border p-2 px-4 text-lg md:text-xl border-sky-400  rounded-md focus:bg-sky-500 hover:bg-sky-500 hover:scale-108'><a href={resume} download={resume}>Download CV <FileDownloadOutlinedIcon/></a></button>
          <div className='flex gap-2'>
            <Link to={"https://github.com/Ambadi7"} className='hover:scale-110 '>
              <GitHubIcon/>
            </Link>
            <Link to={"https://www.linkedin.com/in/ambadi-k-r-5a855831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className='hover:scale-110 '>
              <LinkedInIcon/>
            </Link>
            <Link to={"mailto:ambadikr7@gmail.com"} className='hover:scale-110 '>
              <EmailIcon/> 
            </Link>
 
          </div>
        </div>
      </motion.div>
      {/* RIGHT image*/}
      <motion.div
       initial={{ x: 80, opacity : 0 }}
       whileInView={{opacity : 1, x:0}}
       animate={{scale:[0.4,0.6,0.7,0.8]}}
       transition={{
       duration: 2,
       ease: 'easeOut',
       }}
       viewport={{once:true}}
       className="flex justify-center w-full md:w-[500px] lg:w-[600px]  h-auto rounded  ">
        <img src="/images/home2.jpg" className=' h-96 md:h-auto lg:h-[480px] rounded-md object-contain'  alt="" />
      </motion.div>
        
    </div>
  )
}

export default Home