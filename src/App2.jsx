import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";//bundle is used ki jo navbar me dropdown disable
// hai use enable krne k liye
// import Dropdown from 'react-bootstrap/Dropdown';
// import {Container , Dropdown} from 'react-bootstrap';
import Home1 from "./Home1";
import About1 from "./About1";
import Service1 from "./Service1";
import Contact1 from "./Contact1";
import Navbar1 from "./Navbar1";
import {Routes,Route} from "react-router-dom";
// import Footer1 from "./Footer1";

const App2=()=>{
    return(
        <>
        <Navbar1/>
        <Routes>
        <Route exact path="/" Component={Home1}/>
        <Route exact path="/about" Component={About1}/>
        <Route exact path="/service" Component={Service1}/>
        <Route exact path="/contact" Component={Contact1}/>
        <Route path="*" Component={Home1}/>
        
        </Routes>
        {/* <Footer1/> */}
            
        </>
    )
}

export default App2;