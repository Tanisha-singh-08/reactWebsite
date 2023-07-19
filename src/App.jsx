// import React, { useState } from "react";
// import {AiFillCloseCircle} from "react-icons/ai";

import { useEffect, useState } from "react"

// const App=()=>{

//     const [inputlist,setInputList]=useState("");
//     const [Items,setItems]=useState([]);//we want ki jo user likhe vo ek k neeche ek aajaye to we have to use an array..
//     // aur state k liye hooks ki neeed h to hm iss hook me initial ek array pass krenge..

//     const itemEvent=(event)=>{
//      setInputList(event.target.value);
//     };

//     const listOfItems=()=>{
//         setItems((oldItems)=>{
//             return [...oldItems,inputlist];

//         });
//         setInputList("");
//     };

//     const deleteItems=()=>{

//     }
    
//     return(
//         <>
//         <div className="main_div">
//             <div className="center_div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <input type ="text" placeholder="Add item" onChange={itemEvent}
//                     value={inputlist}
//                 />
//                 <button onClick={listOfItems}> + </button>

//                 <ol>
//                     {/* <li>Buy Apple</li> */}
//                     {/* <li>{inputlist}</li> */}

//                     {/* instead of list we waant ki hamara array one by one dikhe for tht we have to use map */}
//                     {Items.map((itemval,index)=>{
//                         return (<>
//                         <div className="todo_style">
//                         <AiFillCloseCircle className="icon" onClick={deleteItems}/>
//                         <li>{itemval} </li>
//                         </div>
//                         </>)
//                     })}

//                 </ol>
//             </div>
//         </div>

//         </>
//     );
// };

// export default App;


//lecture 57--->useEffects
/*here we will create  a button and on clicking its value increases...to jb jb button click ho means jb app methid
render ho uske baad kuch show ho..for tht we use "useEffect" .....*/

// import React, { useEffect, useState } from "react";

// const App=()=>{
//     const [num,setNum]=useState(0);
//     const [num1,setNum1]=useState(0);

//     //useEffect bhi ek function leta hai..
//     //ueEffect is called jb page rfresh hota hai tb aur jb render method khtm hota hai tb..but if w want
//     //ki jb hm pehli baar click kre tb hi alert ho . so for tht hme useEffect me ek ampty array pass krna hoga..
//     useEffect(()=>{
//         alert("I am Clicked");
//     },[num]);
//     //means hm chaht hai ki pehle btn pe click hone pr hi alert show ho..

//     const inc=()=>{
//          setNum(num+1);
//     }

//     const inc1=()=>{
//         setNum1(num1+1);
//    }
//     return(
//         <>
//               <button onClick={inc}>Click me {num}</button>
//               <button onClick={inc1}>Click me {num1} </button>
//         </>
//     );



// };

// export default App;

//lecture58--->to chamge the title using useEffect

// import React, {useState} from "react";

// const App=()=>{

//     const[num,setNum]=useState(0);

//     useEffect(()=>{
//         document.title=`you clicked me ${num} times`;
//     })

//     const inc=()=>{
//         setNum(num+1);
//     }


//     return(
//         <>
//             <button onClick={inc}>Click Me {num}</button>
//         </>
//     )
// }

// export default App;

//lecture 59-->live covid tracker

// import Statewise from "./Statewise";
// const App=()=>{
//     return(
//         <>
//             <Statewise/>
//         </>
//     )
// };

// export default Statewise;

//lecture 61-->react router

import {Route,Routes,Navigate} from "react-router-dom";
import About from "./About";
import { Switch } from "react-router-dom";
import Contact from "./Contact";
// import { Router, Search } from "@mui/icons-material";
import  Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
import Name from "./Name";
import  Search  from "./Search";
// import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//lecture 71
import Home from "./Home";

import Navbar from "./Navbar";
// const App=()=>{
//    return(
//     <>
//     <Menu/>
//         {/* <h1>hii my name is vinod</h1> */}
//         {/* but now we want ki jb hm url pe kuch bhi likhe to kuch special dikhe */}
//         {/* when we write something on the url that matches with the existing component then that page is rendered */}

//         {/* <About/>
//         <Contact/> */}

//         {/* we will write route inside routes 
//          and we want ki jb bhi koi contact url pe dikhe to vo hme display ho jaaye..so route ka
//           mtlb hai rasta and path ka mtlb ki uss raste me kon si gali hai.. */}

//         <Routes>
            
//             <Route exact path="/"  Component={About}/>
//             <Route exact path="/service" Component={Service}/>
//             {/* means jb hm / click krenge to vo hme home page pe leke jayega but we need to tell ki kon sa
//             home page hai */}
//             {/* <Route path="/contact" Component={Contact}/> */}

            
//             {/* means jb user /contact likhe to hme usko kaha pe visit kraana hai tha we have to mention */}
//             {/* switch ka kaam yehi hai ki sbse pehla wla path jo match kr gya usko show kra do..so as soon as we */}
//             {/* type / it matches with the first path and home page is displayed */}

//             {/* so for tht we have to use exact */}
//             <Route exact path="/search" Component={Search}/>

//             <Route exact path="/contact" Component={Contact}/>
//             {/* <Route exact path="/contact/name" Component={Name}/> */}
//             <Route exact path="/user/:fname/:lname" Component={User}/>

//             {/*and if some page tht does not exist so we have to show error page...*/}
//             <Route path="*" Component={Error}/>

//         </Routes>
//     </>
//    )
// };
// export default App;

//lecture 71

// const App=()=>{
//     return(
//         <>
//             <Navbar/>
//             <Routes>
//                 <Route exact path="/" Component={Home}/>
//                 <Route exact path="/about" Component={About}/>
//                 <Route exact path="/contact" Component={Contact}/>
//                 {/* <Route path="*" Component={Error}/> */}
//                 <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//         </>
//     )
// };
// export default App;

//lecture 73 -->bootstrap
// const App=()=>{
//     return(
//         <>
//         <div className="container">
//             <h1 className="text-center">Welcome</h1>
//             <br/>
//             <div className="text-center">
//             <div class="card" style={{width: "18rem"}}>
//                <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."/>
//                <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-outline-success">Go somewhere</a>
//           </div>
//         </div>
            
//             </div>
//             </div>
//         </>
//     )
// }

// export default App;

//