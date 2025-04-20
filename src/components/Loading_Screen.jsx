import React from 'react'

import CodeLoading from './CodeLoading';

const Loading_Screen = () => {
  return (
    <div className='flex justify-center items-center  h-screen w-full  text-xl'>
        <div>
            <CodeLoading/>
        </div>
    </div>
  )
}

export default Loading_Screen