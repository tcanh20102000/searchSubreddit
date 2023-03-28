import React, {useState} from "react";

export default function Joke(props){
    const [isShown, setIsShown] = useState(true);
    function toggle(){
        setIsShown(oldValue => !oldValue)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <input
                type="checkbox"
                id={props.id}
                name={props.id}
                value="Shows punchline"
                checked={isShown}
                onChange={toggle}
            />
            <label for={props.id}>Shows punchline</label>
            <hr />
        </div>
    )
}