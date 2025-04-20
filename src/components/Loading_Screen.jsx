import React from 'react'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import CodeLoading from './CodeLoading';

const Loading_Screen = () => {
  return (
    <div className='bg-black h-screen w-full  text-xl'>
        <div>
            <CodeLoading/>
        </div>
    </div>
  )
}

export default Loading_Screen