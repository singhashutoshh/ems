import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
 
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center gap-5  flex-nowrap py-5 mt-10'>
          {data.tasks.map((elem, idx)=>{

           if (elem.active) {
            return <AcceptTask key={idx} data={elem}/>
           }

            if (elem.NewTask) {
              return <NewTask key={idx} data={elem}/>
            }
           if (elem.completed) {
              return <CompleteTask key={idx} data={elem}/>
            }

            if (elem.failed) {
              return <FailedTask key={idx} data={elem}/>
            }
          })}
    </div>
  )
}

export default TaskList