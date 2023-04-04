import React from "react";

export default function Content(){
    const [SWData, setSWData] = React.useState({})
    const [count, SetCount] = React.useState(1)

    //side effect
    console.log(SWData)
    React.useEffect(function(){
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res=> res.json())
            .then(data => setSWData(data))
    }, [count])

    return(
        <div>
            <pre>{JSON.stringify(SWData, null, 2)}</pre>
            <button 
                onClick={()=> SetCount(prevCount => prevCount + 1)}>
                Next character
            </button>
        </div>
    )
}