
import { motion } from 'framer-motion'

const CodeLoading = () => {
  
  return (
    
    <div >
        {/* Loading code image */}
        <motion.div
        initial={{ opacity :0, scale :0}}
        animate={{opacity : [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] , scale : [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}}
        
        transition={{duration :1.5 , ease :'easeOut'}}
         className='flex relative justify-center items-center '>
          
          <img src="/images/loadingLogo.webp"  className='h-30  md:h-[300px]' alt="" loading='eager'/>

          
        </motion.div>
        <div className='flex justify-center items-center gap-6 md:gap-16 lg:gap-16 pt-8 md:pt-10 lg:pt-15 '>
          {/* 3dot loading */}
            <motion.div
            initial={{opacity :1 , y :0}}
            animate={{opacity:[1,1,1] ,y:[0,-10,0,0]}}
            transition={{duration:1.5}}
            className='w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10  shadow-[0_1px_13px_#38bdf8] rounded-full bg-sky-400 animate-pulse'> 
            </motion.div>
            <motion.div
            initial={{opacity :1 , y :0}}
            animate={{opacity:[0.5,1,1] ,y:[0,0,-10,0]}}
            whileInView={{}}
            transition={{duration:1.5}}
            className='w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10  shadow-[0_1px_13px_#38bdf8] rounded-full bg-sky-400 animate-pulse'> 

            </motion.div>
            <motion.div
            initial={{opacity :1 , y :0}}
            animate={{opacity:[0.5,1,1] ,y:[0,0,0,-10,0]}}
            transition={{duration:1.5}}
            className='w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10  shadow-[0_1px_13px_#38bdf8] rounded-full bg-sky-400 animate-pulse'></motion.div>
            
        </div>
    </div>
  )
}

export default CodeLoading