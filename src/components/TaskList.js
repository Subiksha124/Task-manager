import React from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks,deleteTask,updateTask,toggleComplete}){

return(

<div className="taskList">

{tasks.length===0 && <p>No Tasks Found</p>}

{tasks.map(task=>(
<TaskItem
key={task.id}
task={task}
deleteTask={deleteTask}
updateTask={updateTask}
toggleComplete={toggleComplete}
/>
))}

</div>

);

}

export default TaskList;
