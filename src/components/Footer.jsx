import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <footer className="flex flex-col px-8 h-32 py-2 items-center justify-center border-t border-fuchsia-950">
      <div className='flex gap-3'>
        <div className='rounded-full p-2'>
          <LinkedInIcon/>
        </div>
        <div className='rounded-full p-2'>
          <GitHubIcon/>
        </div>
        <div className='rounded-full p-2'>
          <EmailIcon/>
        </div>

        
        

      </div>
      <div className="">
        <p>&copy; 2025 My Portfolio</p>
      </div>
      
    </footer>
  )
}

export default Footer