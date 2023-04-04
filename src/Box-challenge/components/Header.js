import React, {useState} from "react";
import boxes from "../data/boxes";
import Box from './Box.js';



export default function Header(props){
    const [boxesState, setBoxesState] = useState(boxes)

    
    const inline_styles = {
        border: "2px solid black",
        backgroundColor: props.darkMode === true ? '#222222' : '#cccccc',
        width: "40px", 
        height:"40px",
    }

    function Click(id){
        //console.log(`${id} was clicked !`)
        let res = boxesState.findIndex(o => o.id === id);
        //console.log(`Square ${res} was clicked`);
        setBoxesState(oldValue =>
            ([...oldValue, oldValue[res].on = !oldValue[res].on]))
    }
    const showBoxes = boxes.map((item, id)=>{
        return(
            <Box 
                key={item.id}
                box_id={item.id} 
                on={item.on}
                eventListener={() => Click(item.id)} //closure  ??
            />
        )
    })
    return(
        <main>
            <h1>Boxes will go here</h1>
            {showBoxes}
        </main>
    )
}