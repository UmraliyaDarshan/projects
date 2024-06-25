import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Updateoperation() {
    const [id,setid] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const navigate=useNavigate("")
    useEffect(()=>{
        setid(localStorage.getItem("Id"))
        setname(localStorage.getItem("FullName"))
        setemail(localStorage.getItem("EmailId"))
        setaddress(localStorage.getItem("Address"))
    },[])
    
    const Updatedata = () =>{
        axios.put(`https://64f6f7d59d7754084952e0c7.mockapi.io/formdata/${id}`,{
            name,
            email,
            address
        })
        navigate("/readoperation")
    }
  return (
    <div>
      <form>
        <div className="main">
          <h1>React Update operation</h1>
          <label>FullName </label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label>EmailId</label>
          <br />
          <input
            type="email"
            placeholder="Enter You Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label>Address</label>
          <br />
          <textarea
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          ></textarea>
          <br />
          <button type="submit" onClick={Updatedata}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updateoperation;
