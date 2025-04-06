import { motion } from "framer-motion"
import { Data } from "../data/Data";
import { useState } from "react";



const Projects = () => {

  const [project] = useState(Data)
  const fadeIn = {
    initial:{ opacity:0, y: 20 },
    animate:{  y: 0 },
    whileTap:{ scale: 0.9 },
    whileInView:{opacity : 1},
    transition:{duration : 2 ,delay :0.5},
    
  };
  
  return (
    <motion.div
     initial={{opacity : 0,y:50}}
     whileInView={{opacity :1 , y:0}}
     transition={{duration :2}}
     viewport={{once:true}}
     className="flex flex-col items-center h-fit  w-full bg-gradient-to-br from-fuchsia-400 via-purple-600 to-fuchsia-950  rounded-xl p-2 md:p-4 justify-center">
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light ">Projects</h2>
      </div>
      <div className="flex   w-ful p-4 justify-center items-center ">
        {/* Grid */}
        <div className="grid grid-flow-row gap-8 grid-cols-1 lg:grid-cols-3 ">
          {/* 1 */}
          {
            project.map((item)=>{
              return(
                <motion.div {...fadeIn}  
                  key={item.id} className="w-auto md:w-84 md:h-65 bg-black hover:scale-105  rounded-md ">
                  <div><img src={item.image} alt="" className=" object-cover rounded-t-md"/></div>
                  <div className="hidden">{item.description}</div>
                  <div className="p-4  flex flex-col justify-center  h  items-center">
                    <div className="flex justify-center pb-2"><h2 className=" font-light text-lg">{item.projectName}</h2></div>
                    <div className="flex gap-1 justify-between w-full">
                      <div className="flex cursor-pointer rounded-md w-3/7 justify-center underline-offset-4 hover:scale-115 hover:text-fuchsia-950 hover:underline ">
                        <h3>Live Demo</h3>
                      </div>
                      <div className="flex cursor-pointer  rounded-md w-5/7 justify-center underline-offset-4 hover:scale-115 hover:text-fuchsia-950 hover:underline ">
                        <h3 className="">GitHub-Repository</h3>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              )

            })
          }

          
        </div>

      </div>
        
    </motion.div>
  )
}

export default Projects