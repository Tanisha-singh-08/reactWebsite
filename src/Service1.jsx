import React from "react";
import img1 from "./web.png";
import Card from "./Card";
import Sdata from "./Sdata";


const Service1=()=>{
    return(
    <>
        <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        
                        {/* <Card/> */}
                        {
                            Sdata.map((val,ind)=>{
                                return <Card key={ind}
                                    imgSrc={val.imgSrc}
                                    title={val.title}
                                />
                            })
                        }
                </div>
            </div>
        </div>
      </>
   
    )
        
      

}

export default Service1;