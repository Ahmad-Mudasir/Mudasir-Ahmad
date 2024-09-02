import {SKILLS} from "../Data"

const Skills = () => {
  return (
    <section className="container mx-auto -z-50"id="skills">
        <h2 className="mt-20 mb-12 text-center text-4xl  font-semibold">Skills</h2>
       
        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                {SKILLS.map(({id, icon, name, style}) => (
                    <div 
                    key={id}
                    className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                    <div  className='w-20 flex justify-center mx-auto'>{icon}</div>
                     
                    <p className='mt-4'>{name}</p>
                </div>
                ))}
                
            </div>

    </section>
  )
}

export default Skills




{/* <div className="mx-2 flex flex-col px-4 py-2 lg:px-20 rounded-3xl border border-stone-50/30 bg-black/15 backdrop-blur-lg ">
         {SKILLS.map((skill,index)=>(
            <div key={index} className={`py-6 flex items-center justify-between ${index !==SKILLS.length -  1? "border-b border-stone-50/30" :""}`}>
               <div className="flex items-center">{skill.icon}</div>
               <div className="text-lg lg:text-2xl">{skill.name}</div>
            </div>    
         ))}
       </div> */}