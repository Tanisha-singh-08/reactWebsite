import React, { useEffect, useState } from "react";
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./statewise.css";

const Statewise=()=>{

    const [data,setData]=useState([]);

    const getCovidData =async()=>{
       const res= await fetch("https://data.covid19india.org/v4/min/data.min.json");
       const actuaData= await res.json();
    //    console.log(actuaData);//we want to show the data statewise
    console.log(actuaData);

    setData(actuaData);
    }

    useEffect(()=>{
          getCovidData();
    },[]);
    return(
        <>
        
        <div className="container-fluid mt-5">
        <div className="main-heading">
            <h1 className="max"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
        </div>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th class="state">State</th>
                        <th class="state">confirmed</th>
                        <th class="state">Recovered</th>
                        <th class="state">Deaths</th>
                        <th class="state">Active</th>
                        <th class="state">Updated</th>
                    </tr>
                </thead>
                <tbody>

                {
                    data.map((currElem,ind)=>{
                        return(
                     <tr>
                        <th>State</th>
                        <th>confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                        )
                    })
                }
                    <tr>
                    <th class="state">State</th>
                        <th class="state">confirmed</th>
                        <th class="state">Recovered</th>
                        <th class="state">Deaths</th>
                        <th class="state">Active</th>
                        <th class="state">Updated</th>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
        </>
    )
};

export default Statewise;