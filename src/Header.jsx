import React from "react";
import logo from "./logoo.png";
// import "./notes.css";

const Header=()=>{
    return(
        <>
         {/* <h1>hi header</h1> */}
         <div className="header">
            <img src={logo} alt="logo" width="70" height="50"/>
            <h1>Tanisha Keep</h1>
         </div>
        </>
    )
}

export default Header;