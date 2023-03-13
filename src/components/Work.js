import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectList } from '../helpers/ProjectList';



const Work = () => {
  
  return (
    <div 
    name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
                <p className=' py-6'>Check out some of my recent work</p>
            </div>
            
           {/* Container */}
           <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {ProjectList.map((project, ) => {return <ProjectItem name={project.name} image={project.image} git={project.git} url={project.url}  />})}
             
            </div>
        </div>
    </div>
  )
}

export default Work