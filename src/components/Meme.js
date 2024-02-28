import React, { useState } from "react"
import memesData from "../memesData"

export default function Meme() {
    
    const [meme, setMeme] = useState(
        {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    
    
    function newMeme() {
        const memesArray = memesData.data.memes;
        const index = Math.floor(Math.random() * memesArray.length);
        const newUrl = memesArray[index].url
        setMeme(prevMeme => (
           {
            ...prevMeme,
            randomImage: newUrl
           } 
        ))
        
    }

    function handleTopText(event) {
        setMeme(prevMeme => (
            {        
            ...prevMeme,
            topText: event.target.value
        }
        ))
    }

    function handleBottomText(event) {
        setMeme(prevMeme => (
            {        
            ...prevMeme,
            bottomText: event.target.value
        }
        ))
    }
    
    return (
        <main>
        <div className="form">
            <div>
                <label className="form--label">Top text
                <input 
                className="form--input" 
                type="text" 
                value={meme.topText}
                placeholder="Shut up" 
                onChange={handleTopText} /></label>
            </div>
            <div>
                <label className="form--label">Bottom text
                <input 
                className="form--input" 
                type="text" 
                id="bottomText" 
                value={meme.bottomText}
                placeholder="And take my money" 
                onChange={handleBottomText} /></label>
            </div>
            <button className="form--button" type="button" onClick={newMeme}>Get a new meme image 🖼️</button> 
              
        </div>    
        <img className="meme--image" src={meme.randomImage} />
        <p className="meme--text" >{meme.topText}</p> 
        <p className="meme--text" >{meme.bottomText}</p> 
        </main>
    )
}