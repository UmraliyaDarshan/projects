import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Crudapp() {
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("")
    const navigate=useNavigate("")
    const handledata = () =>{
        console.log(fname)
        console.log(lname)
        axios.post('https://64f6f7d59d7754084952e0c7.mockapi.io/formdata',{
            fname,
            lname
        })
        return navigate("/read")
    }

  return (
    <div>
        <h1>React Crud App</h1>
        <label>First Name</label><br/>
        <input type='text' placeholder='First Name' value={fname} onChange={(e)=>setfname(e.target.value)} /><br/>
        <label>Last Name</label><br/>
        <input type='text' placeholder='Last Name' value={lname} onChange={(e)=>setlname(e.target.value)}/><br/>
        <button type='submit' onClick={handledata}>submit</button>
    </div>
  )
}

export default Crudapp