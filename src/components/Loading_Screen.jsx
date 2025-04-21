import React from 'react'
import { motion } from 'framer-motion';

import CodeLoading from './CodeLoading';

const Loading_Screen = () => {
  return (
    <div className='flex justify-center items-center  h-screen w-full  text-xl'>
        <motion.div 
          initial={{ opacity :0, scale :0}}
          animate={{opacity : [0.1,0.2,0.3,0.4,0.5,0.7] , scale : [0.1,0.2,0.4,0.6,0.8,1]}}

          transition={{duration :2}}
        >
            <CodeLoading/>
            <img src="/public/images/loadingLogo.png" alt="" />
        </motion.div>
    </div>
  )
}

export default Loading_Screen