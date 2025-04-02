import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";


const Contact = () => {

  const form=useRef()
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
    <div className=" h-fit w-full rounded-xl p-4"> 
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light ">Contact</h2>
      </div>
      {/* 1 */}
      <div className="flex-row   justify-between items-center px-3 md:px-10 py-4">

        <div className=" md:w-[500px] h-auto ">
          <div>
            <h6 className="font-roboto text-2xl font-extralight  text-fuchsia-600">DO YOU HAVE A PROJECT TO DISCUSS  ?</h6>
          </div>
          
        </div>

        {/* 2 */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between w-full h-auto font-roboto font-light  text-gray-300">
          {/* connect */}
          <div className="flex flex-col justify-center items-center w-[300px] lg:w-[380px]  p-6 ">
            <h6 className="  text-xl font-extralight text-center pb-2 hover:scale-105">Connect Me</h6>
            
            <div className="flex flex-col font-poppins font-extralight gap-2">
              <div className='flex hover:scale-105'><EmailIcon/> <h6 className='pl-2'>ambadikr7@gmail.com</h6> </div>
              <div className='flex hover:scale-105'><LinkedInIcon/> <h6 className='pl-2'>Ambadi K R</h6> </div>
              <div className='flex hover:scale-105'><GitHubIcon/> <h6 className='pl-2'>Ambadi7</h6> </div>
            </div>
          </div>

          {/* Message section */}
          <form onSubmit={sendEmail} ref={form} className='p-2 md:p-4 w-[300px] lg:w-[380px] font-montserrat text-gray-300'>
            <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
              <h6>Name</h6>
              <input type="text" name='name' className='w-full h-10 outline-none bg-transparent focus:border-fuchsia-950 focus:shadow-md shadow-fuchsia-950 border rounded-xl px-2' />
            </div>
            <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
              <h6>Email</h6>
              <input type="email" name='email' className='w-full h-10 outline-none bg-transparent focus:border-fuchsia-950 focus:shadow-md shadow-fuchsia-950 border rounded-xl px-2' />
            </div>
            <div className='flex flex-col gap-2 pb-3 hover:scale-105'>
              <h6>Message</h6>
              <input type="text" name='message' className='w-full h-10 outline-none bg-transparent focus:border-fuchsia-950  focus:shadow-md shadow-fuchsia-950 border rounded-xl px-2' />
            </div>
            <div className='flex w-full justify-center  pt-6 '>
              <button type='submit' className='w-40 h-10  border border-fuchsia-950 rounded-xl px-4  hover:bg-fuchsia-950 hover:scale-105 focus:bg-fuchsia-950 font-semibold' >Send Message</button>
            </div>

          </form>

        

        </div>

      </div>
    </div>
  )
}

export default Contact