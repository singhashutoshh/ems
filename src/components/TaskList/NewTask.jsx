import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full p-5 bg-green-400 rounded-xl '>
    <div className='flex justify-between items-center'>
       <h3  className='bg-red-600  text-sm rounded'>{data.category}   </h3>
       <h4  className='text-sm text-white font-medium  '> {data.taskDate}  </h4>
    </div>
    <h2 className='text-xl font-semibold mt-2' >{data.taskTitle} </h2>
    <p className='text-sm mt-2'>
    {data.taskDescription}
    </p>
    <div className='mt-4'>
     <button>Accept Task </button>
    </div>
 </div>
  )
}

export default NewTask
