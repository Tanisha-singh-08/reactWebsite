import { Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";


const Newtodo=()=>{

    const [item, setItem]=useState("");

    const [newitem,setNewItem]=useState([]);

    const itemEvent=(event)=>{
            setItem(event.target.value);
    }

    const listOfItems=()=>{// we want ki btn click hone pe empty array me data store ho for that we use the callback
        //fn by which jitna data usestate me tha hm usko access kr skte hai..
        setNewItem((prevVal)=>{
            return ([...prevVal,item])

        });
        setItem("");
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems} >
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {/* <li>{item}</li> */}

                        {newitem.map((val,index)=>{
                            return <ListCom key={index} text={val}/>//means hm val ko text name se pass kr rhe hai
                        })
                        }
                    </ol>
                </div>
            </div>
        </>

    );

}

export default Newtodo;

// lecture 50---->ho to use bootstrap in react-->
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const Newtodo=()=>{
//     return(
//         <>
//             <h1>welcome to my channel</h1>
//             <button className="btn btn-success" >ThapaTechnical</button>
//         </>
//     );
// }

// export default Newtodo;
// export default Newtodo;

//lecture 52-->accordian..

// import React from "react";
// import Accordian from "./component/accordian/Accordian";

// const Newtodo=()=>{
//     return(
//         <>
//             <Accordian/>
//         </>
//     )
// }

// export default Newtodo  

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


// const Newtodo=()=>{
//     return(
//         <>
//           {/* <h1>WElCOME TO MY CHANNEL</h1> */}

//           <div className="container text-center">
//   <div className="row">
//     <div className="col">
      
//     <div class="card" >
//   <img src="https://picsum.photos/200/301" class="card-img-top" alt="..."
//     height="200px"
//   />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
   
//     </div>
//     <div className="col">
      

//     <div class="card" >
//   <img src="https://picsum.photos/200/302" class="card-img-top" alt="..."
//     height="200px"
//   />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
      
//     <div class="card" >
//   <img src="https://picsum.photos/201/300" class="card-img-top" alt="..."
//     height="200px"
//   />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>
//         </>
//     )
// }

// export default Newtodo;

//lecture 54--> GOOGLE KEEP APP CLONE WITH REATJS..just like Keep notes