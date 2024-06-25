import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";
function Moviesapp() {
  const [characters, setcharacters] = useState([]);
  const [error, seterror] = useState(null);
  const [searchquery, setsearchquery] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  const searchHandler = () => {
    console.log("Search Query:", searchquery);
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchquery.toLowerCase())
    );
    console.log("Filtered Characters:", filteredCharacters);
    setsearchdata(filteredCharacters);
  };
  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        setcharacters(response.data);
        setsearchdata(response.data);
      })
      .catch((error) => {
        seterror(error);
      });
  }, []);
  return (
    <div>
      <nav>
        <div className="div1">
          <h1>Harry Potter Movie characters</h1>
          <input
            type="text"
            placeholder="search"
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
          />
          <button onClick={searchHandler}>search</button>
        </div>
      </nav>
      <div className="div2">
        {error}
        {searchdata.length > 0 ? (
          searchdata.map((character) => {
            return (
              <div className="divzoom">
                <div key={characters.id} className="listcharacter">
                  <div className="imgzoom">
                    <div className="imgfade">
                      <img src={character.image} alt={character.name} />
                    </div>
                  </div>
                  <div className="displaydata">
                    <h3>{character.name || "Not Specified"}</h3>
                    <h3>House : {character.house || "Not Specified"}</h3>
                    <h3>
                      BirthDate : {character.dateOfBirth || "Not Specified"}
                    </h3>
                    <h3>
                      eyeColour : {character.eyeColour || "Not Specified"}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Results not Found..</p>
        )}
      </div>
    </div>
  );
}

export default Moviesapp;
