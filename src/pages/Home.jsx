import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
     initial={{opacity : 0,y:50}}
     whileInView={{opacity :1 , y:0}}
     transition={{duration :2}}
     viewport={{once:true}}
     className="flex flex-col md:flex-row p-5  gap-5 h-[700px] md:h-[500px] w-full rounded-xl">
      {/* LEFT Details*/}
      <div className="flex flex-col justify-center gap-10 w-full md:w-[500px] lg:w-[600px] h-full rounded font-Ubuntu-mono p-4">
        {/* 1 */}
        <div className='text-3xl'>
        <h1>Welcome!</h1>
          <h1>Hi! I'm Ambadi K R</h1>
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
      </div>
      {/* RIGHT image*/}
      <div className="flex justify-center w-full md:w-[500px] lg:w-[600px]  h-auto rounded ">
        <img src="/images/home2.jpg" className=' h-60 md:h-[450px] lg:h-[480px] object-contain'  alt="" />
        {/* <img src="/images/home2.png" className=' h-70 md:h-[450px] lg:h-[480px] ' alt="" /> */}
      </div>
        
    </motion.div>
  )
}

export default Home