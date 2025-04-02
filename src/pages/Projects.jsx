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
                  className="w-84 h-70 bg-black hover:scale-105  rounded-md ">
                  <div><img src="https://github.com/Ambadi7/react-todo-list/raw/main/ss1.png" alt="" className="h-50 rounded-t-md"/></div>
                  <div className="hidden">{item.description}</div>
                  <div>{item.projectName}</div>
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