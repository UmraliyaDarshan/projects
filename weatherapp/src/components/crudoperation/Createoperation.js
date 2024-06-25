import React, { useState } from "react";
import "./crud.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Createoperation() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const navigate=useNavigate("")
  const createdata = () => {
    axios.post("https://64f6f7d59d7754084952e0c7.mockapi.io/formdata", {
      name,
      email,
      address
    });
    return navigate("/readoperation")
  };
  return (
    <div>
      <form>
        <div className="main">
          <h1>React Create operation</h1>
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
          <button type="submit" onClick={createdata}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createoperation;
