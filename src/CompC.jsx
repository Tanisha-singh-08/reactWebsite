import React from "react";
import { FirstName, LastName } from "./App1";


const CompC=()=>{
   return(<>
   {/* provider kisi component ko nii smjhta usko kevl function chahie... 
   user ne firtsname me jo bhi paas kia hoga vo hme fname me mil jayega....*/}
    <FirstName.Consumer>
        {(fname)=>{
            return(
                <LastName.Consumer>
                    {(lname)=>{
                        return(
                            <h1>My name is {fname} {lname}</h1>
                        )
                    }}
                </LastName.Consumer>
            )
           
        }}
    </FirstName.Consumer>
   </>
    
   )
};
export default CompC;