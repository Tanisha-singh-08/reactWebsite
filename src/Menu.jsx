import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu=()=>{
    return (
    <>
        <div className="menu_style">
            {/* <a href="/">About Us</a>
            <a href="/contact">Contact Us</a> */}

            {/* when we use anchor tag to jb hm about ya contact pe click kr rhe hazi to page reload horha h
            jo ki hme react router dom me ni krna tha..so for that,we use "link" */}

            {/* <Link to="/">About Us</Link>
            <Link to="/contact">Contact us</Link> */}

            {/* but link use krne se ye ni smjh aarha ki kon sa link active hai so we can  use Navlink jiske paas
            default attributes hote h.. */}

            <NavLink  exact activeClassName="active_class" to="/">About Us</NavLink>
            <NavLink  exact activeClassName="active_class" to="/service">Services</NavLink>
            <NavLink  exact activeClassName="active_class" to="/search">Search</NavLink>
            <NavLink  exact activeClassName="active_class" to="/user">User</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact us</NavLink>
            <br/>
        </div>
    </>
    )
};

export default Menu;
