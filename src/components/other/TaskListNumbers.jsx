import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className=' flex justify-between gap-5 mt-10  screen'>

        <div className='rounded-2xl w-[45%] px-9 py-6 bg-blue-500'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>NEW TASK </h3>
        </div>
        <div className='rounded-2xl w-[45%] px-9 py-6 bg-red-500'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed </h3>
        </div>
        <div className='rounded-2xl w-[45%] px-9 py-6 bg-green-500'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'> Accepted</h3>
        </div>
        <div className='rounded-2xl w-[45%] px-9 py-6 bg-orange-500'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed </h3>
        </div>
    </div>
  )
}

export default TaskListNumbers