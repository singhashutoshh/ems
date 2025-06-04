import React from 'react'

const AcceptTask = ({ data }) => {
  console.log();

  return (
    <div className='flex-shrink-0 w-[300px] h-full p-5 bg-pink-400 rounded-xl '>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600  text-sm rounded'> {data.category}  </h3>
        <h4 className='text-sm text-white font-medium  '> {data.taskDate}  </h4>
      </div>
      <h2 className='text-xl font-semibold mt-2' >{data.taskTitle} </h2>
      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>
      <div className='flex justify-between mt-5'>
        <button className='bg-green-500 py-1 py-2 text-sm'> Mark as Completed</button>
        <button className='bg-red-500 py-1 py-2 text-sm'> Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask


