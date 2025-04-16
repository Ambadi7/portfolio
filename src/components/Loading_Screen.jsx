import React from 'react'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';

const Loading_Screen = () => {
  return (
    <div className='bg-black h-screen w-full text-fuchsia-950 text-xl'>
        <div>
            <CodeOutlinedIcon style={{ fontSize :'300px'}}/> 
            <CodeOffOutlinedIcon style={{ fontSize :'300px'}}/>
        </div>
    </div>
  )
}

export default Loading_Screen