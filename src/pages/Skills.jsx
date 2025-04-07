import { motion } from "framer-motion"

const Skills = () => {
  
  return (
    <motion.div
     initial={{opacity : 0,y:50}}
     whileInView={{opacity :1 , y:0}}
     transition={{duration :2}}
     className="flex flex-col items-center h-auto w-full overflow-hidden  rounded-xl p-4 justify-center">
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-700 bg-clip-text text-transparent">Skills</h2>
      </div>
      <div className="flex flex-col  h-auto w-[1095px] p-4 justify-center items-center text-gray-300">
        <div className=" p-8 pb-14 font-roboto font-extralight text-xl ">
          The Skills, tools and technologies I use :
        </div>
        {/* Grid */}
        <div className="grid grid-flow-row gap-10 grid-cols-1 md:grid-cols-2 ">
          {/* grid1 */}
          <motion.div
            initial={{ x: -150, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}

           className="flex flex-col lg:flex-row gap-10">
            <motion.div 
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
              
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none  animate-pulse ">
              <div>
                <img src="/images/js.png" alt="JavaScript" className="w-7 rounded "/>
              </div>
              <h3>JavaScript</h3>
            </motion.div> 

            <motion.div
            animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/html-5.png" alt="HTML" className="w-7 rounded"/>
              </div>
              <h3>HTML</h3>
            </motion.div>
          </motion.div>
          {/* grid2 */}
          <motion.div
            initial={{ x: 150, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
           className="flex flex-col lg:flex-row gap-10">
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/css.png" alt="CSS" className="w-7 rounded"/>
              </div>
              <h3> CSS</h3>
            </motion.div>
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/react.png" alt="React" className="w-7 rounded"/>
              </div>
              <h3>React JS</h3>
            </motion.div>
          </motion.div>
          {/* grid3 */}
          <motion.div
            initial={{ x: -150, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
            
            className="flex flex-col lg:flex-row gap-10">
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/python.png" alt="Python" className="w-7 rounded"/>
              </div>
              <h3>Python</h3>
            </motion.div>
          
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/git.png" alt="Git" className="w-7 rounded"/>
              </div>
              <h3>Git</h3>
            </motion.div>
          </motion.div>
          {/* grid4 */}
          <motion.div
            initial={{ x: 150, opacity : 0 }}
            whileInView={{opacity : 1, x:0}}
            transition={{
            duration: 2,
            ease: 'easeOut',
            }}
            viewport={{once:true}}
           className="flex flex-col lg:flex-row gap-10">
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none animate-pulse">
              <div>
                <img src="/images/mySql.png" alt="MySQL" className="w-7 rounded"/>
              </div>
              <h3>MySQL</h3>
            </motion.div>
            <motion.div
              animate={{
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform border-2 shadow-lg hover:scale-115 hover:animate-none  animate-pulse">
              <div>
                <img src="/images/tailwind.png" alt="Tailwind" className="w-7 rounded"/>
              </div>
              <h3>Tailwind</h3>
            </motion.div>
          </motion.div>
          

        </div>

      </div>
        
    </motion.div>
  )
}

export default Skills