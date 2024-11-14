import React from 'react'

const Task = ({Title,Description,deleteTasks,index}) => {
  return (
    <div className='task'>
        <div>
        <p>{Title}</p>
        <span>{Description}</span>       

        </div>
        <button  onClick={()=>deleteTasks(index)}>-</button>
    </div>
  )
}

export default Task