import React from "react";
import defaultImg from "../images/crossingbeach.jpg"
import memeData from "../data/memeData.js";




export default function Content(){
    const [allMemeImages, setAllImages] = React.useState(memeData)
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: defaultImg,
    })

    console.log(meme)

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(oldValue =>({
            ...oldValue,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(meme);
        
    }


    
    // let [test1, setTest1] = useState(thing)
    // let [temp, setTemp] = useState(false)

    // function tenary(){
    //     let str =''
    //     temp === false ? str = '1' : str = '2';
    //     console.log('True ? ',str)
    // }
    

    function randomGene(){
        let list_of_meme = allMemeImages.data.memes;
        let max = list_of_meme.length;
        let min = 0;
    
        let res = Math.floor(Math.random()*(max - min) + min);
        const img = list_of_meme[res].url;

        
        setMeme(prevImg =>({
            ...prevImg,
            randomImg: img,
        }));
        
        //console.log(randomNum, list_of_meme[randomNum]);
        // setTemp(!temp);
        // tenary();
    }
    console.log('1 ',allMemeImages);
    React.useEffect(function(){
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res=> res.json())
            .then(data => setAllImages(data))

    }, [])

    return(
        <section className="meme-content">
            <div className="input-box">
                <label>
                    <input 
                        name="topText" 
                        placeholder="Top text"
                        className="input-area"
                        onChange={handleChange}
                        value={meme.topText}
                        />  
                </label>
                <label>
                    <input 
                        name="bottomText" 
                        placeholder="Bottom text"
                        className="input-area"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />  
                </label>
            </div>
            <div className="meme-button">
                <button onClick={randomGene} >
                    Get a new random meme image  🖼
                </button>
            </div>
            <div className="result-image">
                <img 
                    src={meme.randomImg} 
                    alt="Should have an img here."
                    className='logo1'
                    // onMouseOver={() => {nothing1()}}
                />
                <div className="top--text">{meme.topText}</div>
                <div className="bottom--text">{meme.bottomText}</div>
            </div>
        </section>
    );
}