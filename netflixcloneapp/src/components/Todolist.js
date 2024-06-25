import React, { useState } from "react";
function Todolist() {
  const [tododata, settododata] = useState([]);
  const [input, setinput] = useState("");
  const addtask = () => {
    if (input !== "") {
      settododata([...tododata, input]);
      setinput("");
    }
  };
  const removetask = (index) => {
   const remainingtodos= tododata.filter((_,i) => {
      return i !== index;
    });
    settododata(remainingtodos);
  };
  return (
    <div style={{ backgroundColor: "wheat", border: "1px solid black" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label
          style={{
            backgroundColor: "cyan",
            fontSize: "20px",
            marginTop: "30px",
            padding: "20px",
            width: "100%",
          }}
        >
          Todo App
        </label>
        <br />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setinput(e.target.value)}
          style={{
            fontSize: "30px",
            height: "3rem",
            width: "15rem",
            borderRadius: "1.2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <br />
        <br />
        <button
          style={{
            backgroundColor: "lightcoral",
            height: "3rem",
            width: "15rem",
            borderRadius: "1.2rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize:"20px"
          }}
          onClick={addtask}
        >
          Add Task
        </button>

        <div>
          <ul>
            {tododata.map((todos, index) => {
              return (
                <li key={index}>
                  <h1 style={{ margin: "10px", padding: "10px" }}>
                    {todos}
                    <button
                      onClick={() => removetask(index)}
                      style={{
                        margin: "10px",
                        padding: "10px",
                        backgroundColor: "lightcoral",
                        height: "3rem",
                        width: "15rem",
                        borderRadius: "1.2rem",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize:"20px"
                      }}
                    >
                      Remove Task
                    </button>
                    <br />
                  </h1>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Todolist;
