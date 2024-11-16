'use client'

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [setlectedTask,setSelectedTask]= useState(0);
  const [newTask, setNewTask] = useState('');
  const [isUpdateReq, setIsUpdateReq] = useState(false);
  const handleTasks = ()=>{
    if(!isUpdateReq){
      if(newTask){
        setTasks([...tasks, newTask]);
      }
    }else{
      const curTasks=[...tasks];
      curTasks[setlectedTask]=newTask;
      setTasks(curTasks);
      setIsUpdateReq(false);
    }
    setNewTask('');
  }

  const handleInputChange = (e)=>{
    setNewTask(e.target.value);
  }

  const handleDelete = (id)=>{
    const curTasks=[...tasks];
    const newTasks = curTasks.filter((task,index)=>index!==id);
    setTasks([...newTasks]);
  }

  const handleUpdate = (id)=>{
    setNewTask(tasks[id]);
    setSelectedTask(id);
    setIsUpdateReq(true);
  }


  return (
    <div className="w-full h-full flex flex-col gap-4 p-8">
      <h1>Tasks</h1>
      <div className="flex flex-col gap-4">
      {
        tasks?.map((task,index)=>{
          return(
            <div className="flex" key={index}>
              <span className="text-white cursor-pointer text-base flex items-center justify-center" onClick={()=>handleUpdate(index)}>{task}</span>
              <button className="p-4 bg-green-600 text-sm text-white cursor-pointer" onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          );
        })
      }
      </div>
      <div className="flex justify-center items-center gap-4">
        <input value={newTask} required onChange={handleInputChange} className="text-black"/>
        <button className="p-4 bg-green-600 text-sm text-white cursor-pointer" onClick={handleTasks}>Add</button>
      </div>


    </div>
  );
}
