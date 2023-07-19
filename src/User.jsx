import React from "react";
import { useParams,useLocation,useNavigate } from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const navigate=useNavigate();
    // const navigate = useNavigate();
	const goBack = () => {
		navigate("/");
	}
    console.log(location);
    console.log(navigate);
    return(
        <>
          <h1>User {fname} {lname} Page</h1>
          {/* it returns an object..jb hme user k baad dynamically kisi k name daalke uska data show krna hai to */}
          {/* we use "useparams" */}
          <p>My current location is {location.pathname}</p>
          {/* now we want ki user k baad koi tanisha singh likhta hai to mje button show krana hai...*/}

          {/* {location.pathname===`/user/tanisha/singh`?
          (<button onClick={()=>{
            alert("you are awesome")
          }}>Click Me</button>):null} */}

        {/* now we want ki jb hum button pe click kre to hum ek path peeche chle jaaye ... */}
          {location.pathname===`/user/tanisha/singh`?
          (<button onClick={goBack}>Click Me</button>):null}
        </>
    )
};

export default User;