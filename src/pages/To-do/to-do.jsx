import React, {useState} from "react";

export const Todo = () => {
const [inputvalue, setInputvalue] = useState("");

  return (
    <div className="todo">
      <div className="todoinfos">
       
        <h1>TO-DO LIST</h1>
      </div>
      <div className="todoinput">
        <input type="text"
         className="inpt"
          placeholder="Add your task" 
          value = {inputvalue}
          onChange={((e)=>setInputvalue(e.target.value))}
          />
        <button className="btn" onC>Add +</button>
        <div className="todos-lists">



        </div>
      </div>
    </div>
  );
};