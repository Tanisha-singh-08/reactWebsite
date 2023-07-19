import React, { useState } from "react";
import Header from "./Header";
// import { Notes } from "@mui/icons-material";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

// import "./notes.css";

const Keepnote=()=>{
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    //  alert("I am Clicked");

    setAddItem((prevData)=>{
      return[...prevData,note];
    });

    
  };

  const onDelete=(id)=>{
     setAddItem((olddata)=>{
      olddata.filter((currdata,indx)=>{
        return indx!==id;
      })
     })
  }
    return(
        <>
      <Header/>
      
      {/* <h1>heellooooo</h1> */}
      <CreateNote passNote={addNote}/>
      {addItem.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deletItem={onDelete}
        />
      })}
      
      
      
      {/* <Note/> */}
      <Footer/>
        </>
    )
}

export default Keepnote;

// we require four components [header..footer....CreateNote....Note]
// css is in Notes.css