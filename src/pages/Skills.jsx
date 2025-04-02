

const Skills = () => {
  return (
    <div className="flex flex-col items-center h-[680px] w-full overflow-hidden  rounded-xl p-4 justify-center">
      <div className="h-16 flex items-center justify-center">
        <h2 className="text-3xl font-light ">Skills</h2>
      </div>
      <div className="flex flex-col  h-[680px] w-[1095px] p-4 justify-center items-center text-gray-300">
        <div className=" p-8 pb-14 font-roboto font-extralight text-xl ">
          The Skills, tools and technologies I use :
        </div>
        {/* Grid */}
        <div className="grid grid-flow-row gap-10 grid-cols-2 lg:grid-cols-4 ">
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse ">
            <div>
              <img src="/public/images/js.png" alt="JavaScript" className="w-7 rounded "/>
            </div>
            <h3>JavaScript</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/html-5.png" alt="HTML" className="w-7 rounded"/>
            </div>
            <h3>HTML</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/css.png" alt="CSS" className="w-7 rounded"/>
            </div>
            <h3> CSS</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/react.png" alt="React" className="w-7 rounded"/>
            </div>
            <h3>React JS</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/python.png" alt="Python" className="w-7 rounded"/>
            </div>
            <h3>Python</h3>
          </div>
         
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/git.png" alt="Git" className="w-7 rounded"/>
            </div>
            <h3>Git</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/mySql.png" alt="MySQL" className="w-7 rounded"/>
            </div>
            <h3>MySQL</h3>
          </div>
          <div className="flex gap-2 justify-center items-center w-40 h-16 inset-shadow-sm inset-shadow-fuchsia-950  shadow-fuchsia-950  rounded-lg  border-fuchsia-950 transition-all transform hover:border-2 hover:shadow-lg hover:scale-115 hover:animate-none ease-in-out animate-pulse">
            <div>
              <img src="/public/images/tailwind.png" alt="Tailwind" className="w-7 rounded"/>
            </div>
            <h3>Tailwind</h3>
          </div>

        </div>

      </div>
        
    </div>
  )
}

export default Skills