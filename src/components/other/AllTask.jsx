import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] =  useContext(AuthContext)
 
  
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5  rounded '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                 <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
                 <h3 className='text-lg font-medium w-1/5 '>New Task </h3>
                 <h5 className='text-lg font-medium w-1/5 '> Active Task</h5>
                 <h5 className='text-lg font-medium w-1/5 '> Completed</h5>
                 <h5 className='text-lg font-medium w-1/5 '> failed</h5>
               </div> 

            <div >
            {userData.map(function(elem,idx){
              
              return   <div key={idx} className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-500'> {elem.taskCounts.newTask} </h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'> {elem.taskCounts.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'> {elem.taskCounts.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-500'> {elem.taskCounts.failed}</h5>
              </div> 
            })} 
            </div>
        </div>
    )
}

export default AllTask