import { useState } from "react";

function Todo(){
  const[tasks,setTasks] = useState([]);
  const addTaskHandler = () => {
    const newTaskValue = document.getElementById("new-task").value;
    if (newTaskValue.trim() === "") {
      alert("Add something!");
    } else {
      setTasks((prevTasks) => [...prevTasks, newTaskValue]);
      document.getElementById("new-task").value = "";
    }
  }
  const removeTaskHandler = (index)=>{
    setTasks(tasks.filter((_,i)=> i!==index));
  }
  return(
    <>
    <div id="main-container">
      <div id="container">
        <h1>To-Do List</h1>
        <div id="task-list">
          <ul>
            {tasks.length==0 ? <p id="completed-msg">All Tasks Completed🥳</p> : tasks.map((task,index)=>
            <li key={index} onClick={()=>removeTaskHandler(index)}>
              {task}
            </li>
            )}
          </ul>
          <input type="text" id="new-task" placeholder="Add new Task"/>
          <br />
          <div id="btns">
          <button onClick={addTaskHandler}>Add</button>
          </div>
          
        </div>
      </div>
      <p id="mark-complete">Click on the tasks that are completed to remove them</p>
      </div>
    </>
  )
}

export default Todo;