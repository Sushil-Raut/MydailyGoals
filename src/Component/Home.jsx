import React,{useEffect, useState} from 'react'
import Task from './Task'


const Home = () => {
  const initialArray =localStorage.getItem("Tasks")?JSON.parse(localStorage.getItem("Tasks")):[];
  const [Tasks,setTasks]=useState(initialArray);
  const [Title, setTitle]=useState("");
  const [Description,setDescription] =useState("");
  console.log(Tasks);
  console.log(Title,Description);

  const sumbmitHandler =(e)=>{
    e.preventDefault();
    setTasks([...Tasks,{
      Title:Title,
      Description:Description
    },
  ]);
  setTitle("");
  setDescription("");
  
  
  };

  const deleteTasks=(index)=>{
    const filteredArr=Tasks.filter((val,i)=>{
      return i !==index;
    });   
   
    setTasks(filteredArr);

  };
  useEffect(()=>{
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
  },[Tasks])
  
  return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={sumbmitHandler} >
        <input placeholder='Title' type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder='Description' value={Description}onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type='submit'>Add Your Today Goals</button>
      </form>

      {Tasks.map((item,index)=>(
        <Task key={index} Title={item.Title} Description={item.Description} deleteTasks={deleteTasks} index={index}/>
        
      ))} 

     

    </div>
  )
}

export default Home