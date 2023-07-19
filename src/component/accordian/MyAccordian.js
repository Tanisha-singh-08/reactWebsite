import React from "react";

const MyAccordian=({question,answer})=>{
    return(
        <>
            {/* <h1>Thapa</h1> */}
            {/* we will see thapa 6 times bcoz api me  we have  data total 6times */}
            <h1>{question}</h1>
            <h1>{answer}</h1>
        </>
    )
}

export default MyAccordian;