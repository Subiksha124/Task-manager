import React ,{useState} from "react";

function TaskItem({task,deleteTask,updateTask,toggleComplete}){

const [editing,setEditing] = useState(false);
const [text,setText] = useState(task.title);

const saveEdit = ()=>{
updateTask({...task,title:text});
setEditing(false);
};

return(

<div className="taskItem">

<input
type="checkbox"
checked={task.completed}
onChange={()=>toggleComplete(task.id)}
/>

{editing ? (

<input
value={text}
onChange={(e)=>setText(e.target.value)}
/>

) : (

<span className={task.completed ? "completed":""}>
{task.title}
</span>

)}

<div className="buttons">

{editing ? (
<button onClick={saveEdit}>Save</button>
):(
<button onClick={()=>setEditing(true)}>Edit</button>
)}

<button onClick={()=>deleteTask(task.id)}>Delete</button>

</div>

</div>

);

}

export default TaskItem;
