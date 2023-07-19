import React from "react";
import "./notes.css";
import  {DeleteOutline}from "@mui/icons-material";
// import { Button } from "@mui/material";

const Note=(props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
         <div className="note">
            <h1>{props.title}</h1>

            <br/>
            <p>{props.content}</p>
            <button  onClick={deleteNote} className="btn">
                <DeleteOutline className="deleteIcon"/>
            </button>
            

         </div>
        </>
    )
}
export default Note;
