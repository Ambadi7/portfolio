import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';


const Contact = () => {
  // use ref to handle the data from form
  const form=useRef()

    //message send to the email
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs
          .sendForm('service_qbjugrz', 'template_1gw4v7k', form.current, {
            publicKey: 'QBWLNuMH0LXpxZA4H',
          })
          .then(
            () => {
                alert('SUCCESS!')
              console.log('SUCCESS!');
              e.target.reset()
            },
            (error) => {
                alert('Something wrong',error.text)
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <motion.div
     initial={{opacity : 0,y:50}}
     whileInView={{opacity :1 , y:0}}
     transition={{duration :2}}
     viewport={{once:true}}
     id='contact' className=" h-fit w-full rounded-xl p-4"> 
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light bg-gradient-to-br from-fuchsia-400 via-purple-600 to-violet-800 bg-clip-text text-transparent ">Contact</h2>
      </div>
      {/* 1 */}
      <div className="flex-row   justify-between items-center px-3 md:px-10 py-4">

        <div className="flex justify-center md:w-[500px] h-auto ">
          <motion.div 
            initial={{ x: -80, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
          >
            <h6 className="font-roboto text-2xl font-extralight text-center  text-sky-500">DO YOU HAVE A PROJECT TO DISCUSS  ?</h6>
          </motion.div>
          
        </div>

        {/* 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between w-full h-auto font-roboto font-light  text-gray-300">
          {/* connect */}
          <motion.div
            initial={{ x: -60, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
           className="flex flex-col justify-center items-center w-[300px] lg:w-[380px]  p-6 ">
            <h6 className="  text-xl font-extralight text-center pb-2 hover:scale-105">Connect Me</h6>
            
            <div className="flex flex-col font-poppins font-extralight gap-2">
              <div className='flex hover:scale-105'><EmailIcon/> <h6 className='pl-2'>ambadikr7@gmail.com</h6> </div>
              <div className='flex hover:scale-105'><LinkedInIcon/> <h6 className='pl-2'>Ambadi K R</h6> </div>
              <div className='flex hover:scale-105'><GitHubIcon/> <h6 className='pl-2'>Ambadi7</h6> </div>
            </div>
          </motion.div>

          {/* Message section */}
          <motion.div 
            initial={{ x: 60, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
          >
            <form onSubmit={sendEmail} ref={form} className='p-2 md:p-4 w-[300px] lg:w-[380px] font-montserrat text-gray-300'>
              <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
                <h6>Name</h6>
                <input type="text" name='name' required className='w-full h-10 outline-none bg-transparent focus:border-sky-400 focus:shadow-md shadow-sky-900 border rounded-xl px-2' />
              </div>
              <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
                <h6>Email</h6>
                <input type="email" name='email' required className='w-full h-10 outline-none bg-transparent focus:border-sky-400 focus:shadow-md shadow-sky-900 border rounded-xl px-2' />
              </div>
              <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
                <h6>Message</h6>
                <input type="text" name='message' required className='w-full h-10 outline-none bg-transparent focus:border-sky-400 focus:shadow-md shadow-sky-900 border rounded-xl px-2' />
              </div>
              <div className='flex w-full justify-center  pt-6 '>
                <button type='submit' className='w-40 h-10  border border-sky-400 rounded-xl px-4  hover:bg-sky-700 hover:scale-105 focus:bg-sky-500 font-semibold' >Send Message</button>
              </div>

            </form>
          </motion.div>

        

        </div>

      </div>
    </motion.div>
  )
}

export default Contact