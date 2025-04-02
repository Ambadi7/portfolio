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
    <div className="flex flex-col items-center h-fit  w-full bg-fuchsia-950 rounded-xl p-2 md:p-4 justify-center">
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light ">Projects</h2>
      </div>
      <div className="flex   w-ful p-4 justify-center items-center ">
        {/* Grid */}
        <div className="grid grid-flow-row gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {/* 1 */}
          {
            project.map((item)=>{
              return(
                <motion.div {...fadeIn}  
                  key={item.id} className="w-auto md:w-84 md:h-70 bg-black hover:scale-105  rounded-md ">
                  <div><img src={item.image} alt="" className="h-50 rounded-t-md"/></div>
                  <div className="hidden">{item.description}</div>
                  <div className="p-2 px-8">
                    <div className="flex justify-center pb-2">{item.projectName}</div>
                    <div className="flex gap-1 justify-between">
                      <div className="flex cursor-pointer rounded-md w-3/7 justify-center hover:scale-115 hover:text-fuchsia-950">
                        <h6>Live Demo</h6>
                      </div>
                      <div className="flex cursor-pointer  rounded-md w-4/7 justify-center hover:scale-115 hover:text-fuchsia-950">
                        <h6 className="">GitHub-Repository</h6>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              )

            })
          }

          
        </div>

      </div>
        
    </div>
  )
}

export default Projects