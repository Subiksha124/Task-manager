import React from "react";

function Filter({setFilter,setSearch}){

return(

<div className="filters">

<input
type="text"
placeholder="Search task..."
onChange={(e)=>setSearch(e.target.value)}
/>

<select onChange={(e)=>setFilter(e.target.value)}>

<option value="all">All</option>
<option value="completed">Completed</option>
<option value="pending">Pending</option>

</select>

</div>

);

}

export default Filter;
