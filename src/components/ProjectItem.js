import React from 'react'

const ProjectItem = ({ name, image, id, git, url, type }) => {
  return (
    <div>
     {/* Grid Item */}
     <div style={{backgroundImage: `url(${image})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                     
     {/* hover effect */}
     <div className=' opacity-0 group-hover:opacity-100'>
         <span className='text-2xl font-bold text-white tracking-wider'>
           {type} JS Application
         </span>
         <h2> {name} </h2>
         <div>
           <a href={git}>
             <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
           </a> 
           <a href={url}>
             <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
           </a> 
         </div>
     </div>
 </div>
 </div>
  )
}

export default ProjectItem