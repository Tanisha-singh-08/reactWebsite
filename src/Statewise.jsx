import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Map } from "@mui/icons-material";
import "./statewise.css";

const Statewise=()=>{

    const [data,setData]=useState([]);

    const getCovidData =async()=>{
       const res= await fetch("https://data.covid19india.org/v4/min/data.min.json");
       //api returns a promise..
       const actualData= await res.json();
    //    console.log(actuaData);//we want to show the data statewise
    console.log(actualData);

    setData(actualData.statewise);
    }

    useEffect(()=>{
          getCovidData();
    },[]);
    return(
        <>
        
        <div className="container-fluid mt-5">
        <div className="main-heading">
            <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
        </div>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th >State</th>
                        <th >confirmed</th>
                        <th >Recovered</th>
                        <th >Deaths</th>
                         <th>Active</th>
                        <th >Updated</th>
                    </tr>
                </thead>
                <tbody>
                
                {/* {
                    data.Map((curElem,ind)=>{
                        return(
                            <tr>
                                    <th class="state">{curElem.data}</th>
                                    <td class="state">confirmed</td>
                                    <td class="state">Recovered</td>
                                    <td class="states">Deaths</td>
                                    <td class="state">Active</td>
                                    <td class="state">Updated</td>
                             </tr>
                        )

                    })
                } */}



                    

                    

                    
                </tbody>
            </table>
        </div>

        </div>
        </>
    )
};

export default Statewise;