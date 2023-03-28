import React from "react";
import Joke from "./Joke";
import jokesdata from "../data/JokesData";

export default function Content(props){
    const showJoke = jokesdata.map((item)=>{
        return(
            <Joke {...item}/>
        )
    })
    return(
        <main>
            {showJoke}
        </main>
    )
}