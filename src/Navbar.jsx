import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar=()=>{
    return (
    <>
        <div className="mainMenu">
          

            <NavLink  exact activeClassName="active_class" to="/">Home</NavLink>
            <NavLink  exact activeClassName="active_class" to="/about">About</NavLink>
            <NavLink  exact activeClassName="active_class" to="/contact">Contact</NavLink>
          
            <br/>
        </div>
    </>
    )
};

export default Navbar;