import React from "react";
import img1 from "./web.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from "react-router-dom";
import "./web.css";


const Common=(props)=>{
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <strong className="brand-name">TechGiants</strong> </h1>
                                <h3 className="my-3">
                                    We are the team of talented developers.
                                </h3>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                </div>
                            </div>

                            <div classNam="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgSrc} className="img-fluid animated" style={{paddingTop:"-10px"}} alt=""/>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;