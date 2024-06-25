import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Update() {
    const [id,setid]=useState(null)
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const navigate=useNavigate("")
    useEffect(()=>{
        setid(localStorage.getItem("Id"))
        setfname(localStorage.getItem("FirstName"))
        setlname(localStorage.getItem("LastName"))
    },[])

    const updatedata = () =>{
        axios.put(`https://64f6f7d59d7754084952e0c7.mockapi.io/formdata/${id}`,{
            fname,
            lname,
        }).then((response)=>{
          console.log("update successful",response.data);
          navigate("/read")
        }).catch((error)=>{
          console.log(error)
        })
     navigate("/read")
    }
  return (
    <div>
        <h1>React Update operation</h1>
        <label>First Name</label><br/>
        <input type='text' placeholder='First Name' value={fname} onChange={(e)=>setfname(e.target.value)} /><br/>
        <label>Last Name</label><br/>
        <input type='text' placeholder='Last Name' value={lname} onChange={(e)=>setlname(e.target.value)}/><br/>
        <button type='submit' onClick={updatedata}>update</button>
    </div>
  )
}

export default Update