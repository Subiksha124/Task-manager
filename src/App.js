import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {

const [tasks,setTasks] = useState([]);
const [filter,setFilter] = useState("all");
const [search,setSearch] = useState("");

useEffect(()=>{
const saved = JSON.parse(localStorage.getItem("tasks"));
if(saved) setTasks(saved);
},[]);

useEffect(()=>{
localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);

const addTask = (task)=>{
setTasks([...tasks,task]);
};

const deleteTask = (id)=>{
setTasks(tasks.filter(task=>task.id!==id));
};

const updateTask = (updatedTask)=>{
setTasks(tasks.map(task=>task.id===updatedTask.id?updatedTask:task));
};

const toggleComplete = (id)=>{
setTasks(tasks.map(task=>{
if(task.id===id){
return {...task,completed:!task.completed};
}
return task;
}));
};

const filteredTasks = tasks
.filter(task=>{
if(filter==="completed") return task.completed;
if(filter==="pending") return !task.completed;
return true;
})
.filter(task=>task.title.toLowerCase().includes(search.toLowerCase()));

return (
<div className="container">

<h1>Task Manager</h1>

<TaskForm addTask={addTask}/>

<Filter
setFilter={setFilter}
setSearch={setSearch}
/>

<TaskList
tasks={filteredTasks}
deleteTask={deleteTask}
updateTask={updateTask}
toggleComplete={toggleComplete}
/>

</div>
);
}

export default App;
