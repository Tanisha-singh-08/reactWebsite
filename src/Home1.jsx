import React from "react";
import img1 from "./web.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from "react-router-dom";
import "./web.css";
import Common from "./Common";


const Home1=()=>{
    return(
        <>
            <Common name="Grow your business with" imgSrc={img1} visit="./contact" btname="Get Started"/>
        </>
    )
}

export default Home1;