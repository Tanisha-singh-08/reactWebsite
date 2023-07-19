import React, { useState } from "react";
import Sresult from "./Sresult";


const Search=()=>{
    const[img,setImg]=useState("");

    const inputEvent=(event)=>{
        const data= event.target.value;
        console.log(data);
        setImg(data);
        //and now we want ki user jo bhi enter kre to vo ek img me show ho..for tht we have sresult

    }
    return(
        <>
            {/* <h1>hiii tanisha</h1> */}
            <div className="searchbar">
            <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}/>
            {/* <Sresult name={img}/> */}

            {/* now we want ki jb bhi user kuch type kre tb hi koi img display ho ni to vo empty rhe.. */}
            {img===""?null:<Sresult name={img}/>}
            </div>

        </>
    )
};

export default Search;