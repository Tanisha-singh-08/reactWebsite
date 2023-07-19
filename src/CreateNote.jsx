import React, { useState } from "react";
import "./notes.css";

import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{

    //now we want jo user type kre title and text we want to store so for tht we us usestate..
    // const [note,setNote]=useState();

    //basically we require data of two input field title and textarea..so we create an object
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    
    const InputEvent=(event)=>{
        const value=event.target.value;
        const name=event.target.name;


        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        });


    };

    const addEvent=()=>{
       props.passNote(note);
       setNote({
        title:"",
        content:""
       })
    };

    return (
        <>
         <div className="main_note">
            <form>
            <input type="text" 
            name="title" 
            value={note.title}
             onChange={InputEvent}
             
              placeholder="Title" autoComplete="off"
              />
            <textarea rows='' 
            column='' 
            name="content"
            value={note.content} 
            
            onChange={InputEvent} placeholder="Write a Note...">

            </textarea>
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button>
            
            </form>
         </div>
        </>
    )
}

export default CreateNote;