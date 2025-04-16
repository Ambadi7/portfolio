import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="flex flex-col px-8 h-32 py-2 items-center justify-center border-t border-fuchsia-950">
      <div className='flex gap-3'>

        {/* logo */}
        
        <Link to={"https://github.com/Ambadi7"} className='rounded-full p-2'>
          <GitHubIcon/>
        </Link>

        <Link to={"https://www.linkedin.com/in/ambadi-k-r-5a855831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className='rounded-full p-2'>
          <LinkedInIcon/>
        </Link>
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