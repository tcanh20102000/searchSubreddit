import React, {useState} from "react";



export default function Box(props){
    const {box_id, on, eventListener} = props;
    
    

    const inline_styles = {
        border: "2px solid black",
        backgroundColor: on === true ? '#222222' : '#cccccc',
        width: "40px", 
        height:"40px",
    }

    
    return(
        <div style={inline_styles} onClick={eventListener}> 
            <p style={{'color': 'white'}}>{box_id}</p>
        </div>
    )
}