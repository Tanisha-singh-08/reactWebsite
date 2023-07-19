import React from "react";
import img3 from "./hero1.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from "react-router-dom";
import "./web.css";
import Common from "./Common";


const About1=()=>{
    return(
        <>
            <Common name="Welcome to About page" imgSrc={img3}   visit="./contact" btname="Contact now"/>
            </>
    )
}

export default About1;