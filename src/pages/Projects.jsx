import { motion } from "framer-motion"
import { Data } from "../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";



const Projects = () => {

  const [project] = useState(Data)
  const fadeIn = {
    initial:{ opacity:0, y: 20,scale :0.5 },
    animate:{  y: 0,scale :0.9 },
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
     id='projects' className="flex flex-col items-center h-fit  w-full  rounded-xl p-2 md:p-4 justify-center">
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light bg-gradient-to-br from-fuchsia-400 via-purple-600 to-violet-800 bg-clip-text text-transparent">Projects</h2>
      </div>
      <div className="flex   w-ful p-4 justify-center items-center text-gray-300">
        {/* Grid */}
        <div className="grid grid-flow-row gap-8 grid-cols-1 lg:grid-cols-3 ">
          {/* 1 */}
          {
            project.map((item)=>{
              return(
                <motion.div {...fadeIn}  
                  key={item.id} className="w-auto h-auto lg:w-84 lg:h-65 bg-black hover:scale-105 border-1 border-fuchsia-950  rounded-xl shadow-md  hover:shadow-xl shadow-fuchsia-950">
                  <Link to={item.liveLink} className="lg:relative">
                    <img src={item.image} alt="" className=" object-contain rounded-t-xl"/>
                    {/* description show in lg while hover */}
                    <div className=" hidden lg:absolute lg:flex opacity-0 hover:opacity-100  inset-0  overflow-auto p-3 font-montserrat font-light text-justify backdrop-blur-lg rounded-t-xl transition:hover text-white">    
                      {item.description }
                    </div>
                  </Link>
                  <Link to={item.liveLink} className="p-4 flex flex-col justify-center  h  items-center">
                    <div className="flex justify-center pb-2"><h2 className=" font-light text-lg">{item.projectName}</h2></div>
                    {/* description */}
                    <div className="lg:hidden p-2 font-montserrat font-light">
                      <h6 className="text-justify">{item.description}</h6>
                    </div>
                    <div className="flex gap-1 justify-between w-full">
                      {/* live Demo */}
                      <Link to={item.liveLink} className="flex cursor-pointer rounded-md w-3/7 justify-center underline-offset-4 hover:scale-115 hover:text-fuchsia-950 hover:underline ">
                        <h3>Live Demo</h3>
                      </Link>
                      {/* gitHub-repo */}
                      <Link to={item.gitHubRepo} className="flex cursor-pointer  rounded-md w-5/7 justify-center underline-offset-4 hover:scale-115 hover:text-fuchsia-950 hover:underline ">
                        <h3 className="">GitHub-Repository</h3>
                      </Link>
                    </div>
                  </Link>
                  
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