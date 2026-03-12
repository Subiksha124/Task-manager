import React,{useState} from "react";

function TaskForm({addTask}){

const [title,setTitle] = useState("");

const handleSubmit = (e)=>{
e.preventDefault();

if(title==="") return;

addTask({
id:Date.now(),
title,
completed:false
});

setTitle("");
};

return(

<form onSubmit={handleSubmit} className="taskForm">

<input
type="text"
placeholder="Enter new task..."
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<button>Add Task</button>

</form>

);
}

export default TaskForm;
