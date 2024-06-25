import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const Moviesseries = () =>{

    interface show {
        id : number;
        name : string;
        url : string;
        type : string;
        language : string;
        genres : string;
        runtime : number;
        image : {
            medium : string,
        };
    }
    const [movieseriesstring,setmovieseries]=useState<show[]>([]);
    const { id } = useParams();  
      useEffect(()=>{
        axios.get(`https://api.tvmaze.com/shows`)
        .then((res):any=>{
            console.log("API data",res.data)
            setmovieseries(res.data)
        })        
    },[id])
    return(
        <>
    <div className="container-fluid">
      <div className="row">
        {movieseriesstring.map((show) => (
          <div key={show.id} className="col-md-4 mb-3">
            <div className="card">
              <img className="rounded-3" src={show.image.medium} alt={`Image for ${show.name}`} />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">{show.type}</p>
                <p className="card-text">{show.language}</p>
                <p className="card-text">{show.genres}</p>
                <p className="card-text">{show.runtime} minutes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        
        </>
    )
}
export default Moviesseries