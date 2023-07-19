// import React from "react";

// const Error=()=>{
//     return <h1>Ops!page not found</h1>
// }
// export default Error;

//lecture 71--->create error 404 page...
import React from "react";
import { NavLink } from "react-router-dom";

const Error=()=>{
    return (
        <>
            <div className="setStyle2">
                <h1>404 Error Page</h1>
                <p>Sorry, this Page doesn't exist</p>
                <NavLink to="/">Go Back</NavLink>
            </div>
        </>
    )
}
export default Error;

