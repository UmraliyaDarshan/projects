import React, { useEffect, useState } from "react";
import axios from "axios";
function TodosApi() {
  const [todos, settodos] = useState([]);
  const [error, seterror] = useState("");

  useEffect(()=>{
  axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      return settodos(response.data);
    })
    .catch((error) => {
      seterror(error);
    });
},[])
  return (
    <div>
    <h1 style={{backgroundColor:"cyan"}}>Todos with API jsonplaceholder API</h1>
      {error}
      {todos.map((todo) => {
        return(
        <div key={todo.id} style={{backgroundColor:"wheat"}}>
          <ul>
            <li>
              <h1 style={{fontSize:"25px"}}>{todo.title}</h1>
              <h2 style={{fontSize:"15px"}}>{todo.completed ? "completed" : "Not Completed"}</h2>
            </li>
          </ul>
        </div>)
      })}
    </div>
  );
}

export default TodosApi;
