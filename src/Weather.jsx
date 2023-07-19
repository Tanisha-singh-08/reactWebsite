import React, { useState } from "react";
const api={
    key:"e3eef335bc88efc742247ac190aa2495",
    
    // base:"https://api.openweathermap.org/data/2.5",
    base:"https://home.openweathermap.org/api_keys",
};

const Weather=()=>{

    const [search,setSearch]=useState("");

    const searchPressed=()=>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result);
        });
    };
    return(<>
        <div className="App">
            <header className="App-header">
                <h1>Weather App</h1>
             <div>
                <input type="text" placeholder="Enter city/town..."

                    onChange={(e)=>setSearch(e.target.value)}
                />

                <button onClick={searchPressed}>Search</button>
              </div>
                <p>New York City, USA</p>
                <p>32 degree F</p>
                <p>Sunny</p>
            </header>
        </div>
        </>
    )
}

export default Weather;