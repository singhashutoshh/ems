import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full p-5 bg-pink-400 rounded-xl '>
    <div className='flex justify-between items-center'>
       <h3  className='bg-red-600  text-sm rounded'>{data.category}   </h3>
       <h4  className='text-sm text-white font-medium  '> {data.taskDate}  </h4>
    </div>
    <h2 className='text-xl font-semibold mt-2' > {data.taskTitle} </h2>
    <p className='text-sm mt-2'>
    {data.taskDescription} 
    </p>
    <div className='mt-2'>
        <button className='w-full'>Complete</button>
    </div>
 </div>
  )
}

export default CompleteTask
