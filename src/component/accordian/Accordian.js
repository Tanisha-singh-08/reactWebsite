import React, { useState } from "react";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

import {questions} from "./api";

const Accordian=()=>{
    //mere paas api ka data hai tht is array of an object jisme hme loop chalana hai for tht we have to use state..
    const [data,setData]=useState(questions);
    return(
        <>
             {/* <h1>Tanisha</h1> */}
             <section className="main_div">
             <h1>React interview questions</h1>

             {data.map((curElem)=>{
                {/* return curElem.question;// we have to use dot beacuse it is an object.. */}
                //now yaha directly return krne se accha hm isko alg component "MyAccordian" me rakh ke 
                //return krege..

                const{id} = curElem;
                return <MyAccordian key ={id} {...curElem}/>

             })}
             </section>

        </>
    )
}

export default Accordian; 
//it is called in newtodo..