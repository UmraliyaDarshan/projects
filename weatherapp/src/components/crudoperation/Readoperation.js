import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
function Readoperation() {
    const [result,setresult]=useState([])
    const navigate=useNavigate("")

    const setdata=(data)=>{
        let {id,name,email,address}=data;
        localStorage.setItem("Id",id)
        localStorage.setItem("FullName",name)
        localStorage.setItem("EmailId",email)
        localStorage.setItem("Address",address);
        navigate("/updateoperation")
    }


    // Delete operation Functionality
    const afterdeletedata=()=>{
        axios.get('https://64f6f7d59d7754084952e0c7.mockapi.io/formdata')
        .then((response)=>{
            setresult(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const deletedata=(id)=>{
        axios.delete(`https://64f6f7d59d7754084952e0c7.mockapi.io/formdata/${id}`)
        .then(()=>{
            afterdeletedata();
        })
    }

    // Read Operation Functionality
    useEffect(()=>{
        axios.get('https://64f6f7d59d7754084952e0c7.mockapi.io/formdata')
        .then((response)=>{
            setresult(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[result])

  return (
    <div className='readmain'>
            <h1>React Read Operation</h1>
            <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Update Data</th>
                <th>Delete Data</th>
            </thead>
            <tbody>
        {
            result.map((data)=>{
                return(
                <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td><button onClick={()=>setdata(data)}>Update</button></td>
                    <td><button onClick={()=>deletedata(data.id)}>Delete</button></td>
                </tr>
                )
            })
        }
            </tbody>
            </table>
    </div>
  )
}

export default Readoperation