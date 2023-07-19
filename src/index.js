import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Weather from "./Weather";
import Statewise from "./Statewise";
import Pokemon from "./Pokemon";
import Menu from "./Menu";
import { BrowserRouter,Routes } from "react-router-dom";
import App2 from "./App2";
// import "./index.css";
// import "./newtodo.css";
// import 
// import "./index.css";
// import Incdec from "./Incdec";
// import AddIcon from '@mui/icons-material/Add';

// import Newtodo from "./Newtodo";
// import Keepnote from "./Keepnote.";
// import App1 from "./App1";

// lecture 41--->spread operator..
// let say we have created an array..
// const fullname=["tanisha", "singh"];

// //and we are creating one more array called biodata which also contains the data of fullname array..

// // const biodata=["1",...fullname,"26","female"];
// //by using the spread operator we can have the complete data of any array and can call it inside the other array..

// const biodata=["1",,"26","female",...fullname];//we can use spread operator at any place..

// //the syntax is three dots (...) followed by the array (or iterable ).It expands the array into indiviual
// //elements.so, it can be used to expand the array in a places where zero or more elements are expected..

// console.log(fullname);
// console.log(biodata);


// var shootergames=["call of duty", "resident evil","far cry"];
// var racingGames=["need of speed","burnout"];
// var games=[...shootergames,...racingGames];//to concatenate two or more arrays inside another array...
// console.log(games);

// //another way of using spread operator...by array destructuring
// var shootergames=["call of duty", "resident evil","far cry"];
// var[first, ...remaining]=shootergames;//first me call of duty hai and remaining me restt

// console.log(first);
// console.log(remaining);

// //another way is to use spread operator in array objects..
// const name={
//   fname:"tanu",
//   lname:"singh",
// };

// const naam={
//   id:1,
//   ...name,
//   age:26,
//   gender:"female",
// };

// console.log(naam);
// ReactDOM.render(
//   <App/>,
//   document.getElementById("root")

// );


//lecture 43 --project -1 TODO LIst..

// ReactDOM.render(
//  < App/>,
//  document.getElementById("root")

// );

// ReactDOM.render(
//      <Incdec/>,
//      document.getElementById("root")
    
//     );

//project-2 [TODO LIST USING MATERIAL UI COMPONENTS AND ICONS]   ----> lecture 48

// ReactDOM.render(
//      <Newtodo/>,
//      document.getElementById("root")
    
//     );

    //lecture how to run react in vs code inbuilt terminal-->

    //lecture50---How to use and install bootstrap in React js

// lecture 51 -->Bootstap autocomplete extension....


//lecture 52 CREATE ACCORDION 

// ReactDOM.render(
//           <Newtodo/>,
//           document.getElementById("root")
         
//          );

//lectue 53(REACT WEB PAGE USING BOOTSRAP)
// ReactDOM.render(
//      <Newtodo/>,
//      document.getElementById("root")
    
//     );


//lecture 54 KEEP APP

// ReactDOM.render(
//      <Keepnote/>,

//      document.getElementById("root")
    
//     );

//lecture 55---->
//context API
/* let say we have parent component->then imside it a child com A->inside it a child com C-->
and parent has some data tht is required by c only .
to abhi tk kya hota tha hm jo bhi krte the parent se vo a ko paass hota tha phir b ko uske baad c ko..
so the direct transfer to c component can be done using context API

 1. so, hooks provides a concept called "CONTEXT
 2. react context api allows you to easily access data at different levela of the component tree.
 w/o passing prop to every level...

 3.for this,we have to create a context
  --- then we need a provider jo usko provide kara sake..
     ---there must be a consumer to consume the data...*/

     //let say we have our app1.jsx inside it comp a imside comp a, we have comp b,and inside comp b we have comp c.

// ReactDOM.render(
//      <App1/>,

//      document.getElementById("root")
    
//     );


//lecture 56--->
//useContext hook

/* earlier we have seen ki app1 me naya context create krna to easy hai but when it comes to use it imside compc 
to hme kaafi code likhna pdta tha but by using "useContext" we can reuce our code to great extent....

we are implementing useContext in comp B...*/

// ReactDOM.render(
//          <App1/>,
    
//          document.getElementById("root")
        
//         );


//lecture 57--->useEffect hooks in react js.....

/* by using useEffect hooks ,you tell react that your components needs to do something after render */
// ReactDOM.render(
//     <App/>,

//     document.getElementById("root")
   
//    );


//lecture 58---->react hook challenge--
//changing the title value of website...

// ReactDOM.render(
//     <App/>,

//     document.getElementById("root")
   
//    );

//lecture 59--->live covide tracker...
// components are
/*Components-> Statewise--> Statewise.jsx and statewise.css......*/

// ReactDOM.render(
//     <Statewise/>,

//     document.getElementById("root")
   
//    );

//lecture60-->react api to get pokemon

// ReactDOM.render(
//         <Pokemon/>,
    
//         document.getElementById("root")
       
//        );

//lecture 61---->  REACT ROUTER DOM.....

/*whever we refresh a page then it is called server side routing means hm server ko reload kr rhe hai
let say there is one site aur hm jb menu pe ja rhe hai to menu wala page bhi reload hota h..which is time
taking...

2.but when we see fb to when we go from photos to about so without reloading the page, vo same part pe
uss page ko show krta hai..this is called "CLIENT SIDE RENDERING"....

3.Thats why nowadays people use use react  bcoz client side rendering is more fast today..
4. In react,router is not predefined hme usko install ya import krna pdta hai..*/


// about and contact,error are jsx

/*we need to import Browser router, route and switch from react-router-dom package...*
and we need to write ou app component inside browser router....*/
// import { BrowserRouter } from "react-router-dom";



// ReactDOM.render(
//     <BrowserRouter>

//     <App/>
//     </BrowserRouter>,

//     document.getElementById("root")
   
//    );

//lecture 62---->create navbar using react router dom...
//components are menu..



// ReactDOM.render(
//    <BrowserRouter>
// <App/>
//    </BrowserRouter>,


    

//     document.getElementById("root")
   
//    );


//lecture 64---> react router render method...[diff b/w render and component prop]\
//service page als0..menu.css...
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
 
 
     
 
//      document.getElementById("root")
    
//     );

//lecture 66---->useParams hooks

//react router ka bhi apna khud ka hooks hai..like 'useHistory', 'useLoacation', 'useParams', 'userouteMatch'
//user as a comp

// 1.useparams return an object of key/value pairs of URl Parameters. Use it to access matchMedia.Params
// of the current <Route>
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );

//lecture 68---->useLocation hook in react router 

// with the help of location hum current path ka pta lgta skte Hai....
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );

//lecture 69----> usehistory hooks in react router..
// usehistory hook gives you access to the history instance you may use to Navigate....
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );

//live search filter using hooks and router.....lecture 70[]
//comp are---> Search.jsx and sresult.jsx
//search.css

// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );

//lecture 71--->create react 404 error page using react router dom
//error, home.jsx,navbar.jsx,about.jsx
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );

//lecture 72-->redirect in react router...
//sometimes we want ki agr / k baad kisi ne vo term likh dia jiska page exist na krta ho to we dont
//want to show the error page we want that we shud be redirected to the home page only...
// ReactDOM.render(
//     <BrowserRouter>
//  <App/>
//     </BrowserRouter>,
//      document.getElementById("root")
    
//     );


//lecture 73-->bootstrap 5 
// ReactDOM.render(
//         <BrowserRouter>
//      <App/>
//         </BrowserRouter>,
//          document.getElementById("root")
        
//         );

//lecture 74-->complete responsive website using animation...

//home1, About1, Service1,Contact1, Navbar1, Card,web.css,Sdata----->

ReactDOM.render(
                <>
                       <BrowserRouter>
                             <App2/>
                        </BrowserRouter>
                </>
            ,
             document.getElementById("root")
            
            );