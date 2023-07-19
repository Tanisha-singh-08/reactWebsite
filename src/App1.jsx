import React, { createContext } from "react";
import CompA from "./CompA";

//we can show the data in app1 which is inside comp c...this is the reverse hierarchy..
   //now we have two data , first name and lastname and we need to pass it to comp c only..

   //so we need to create a context
const FirstName=createContext();

//if we want last name also
const LastName=createContext();


const App1=()=>{
   return(<>
    {/* //now hme firstname ko as a custom component hi maanke chlna hoga for easiness.. */}
    <FirstName.Provider value={"tanisha"}>
    <LastName.Provider value={"singh"}>
        <CompA/>
        </LastName.Provider>
    </FirstName.Provider>
    {/* iske beech me aapke components aane chahie */}
   </>
   );
};

// and we will create consumer inside comp C only..and we need to export provier for use.
export default App1;
export {FirstName, LastName};