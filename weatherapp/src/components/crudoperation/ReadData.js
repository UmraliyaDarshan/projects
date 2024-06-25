import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ReadData() {
  const [result, setresult] = useState([]);
  const navigate = useNavigate("");
  const setdata = (data) => {
    if(data){
    let {id,fname,lname}=data;
    localStorage.setItem("Id", id);
    localStorage.setItem("FirstName", fname);
    localStorage.setItem("LastName", lname);
    navigate("/update")
    }
  };

  const getdata=()=>{
    axios.get('https://64f6f7d59d7754084952e0c7.mockapi.io/formdata').then((response)=>{
      setresult(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const deletedata = (id)=>{
    axios.delete(`https://64f6f7d59d7754084952e0c7.mockapi.io/formdata/${id}`)
    .then(()=>{
      getdata();
    })
  }
  useEffect(() => {
    axios
      .get("https://64f6f7d59d7754084952e0c7.mockapi.io/formdata")
      .then((response) => {
        setresult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result]);
  return (
    <div>
      <h1>React Read operation</h1>
      <table>
        <th>First Name</th>
        <th>Last Name</th>
        {result.map((data) => (
          <>
            <tr key={data.id}>
              <td>
                <h1>{data.fname}</h1>
              </td>
              <td>
                <h1>{data.lname}</h1>
              </td>
            <td><button onClick={() => setdata(data)}>Update</button>
            <button onClick={()=>deletedata(data.id)}>delete</button></td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default ReadData;
