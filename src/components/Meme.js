import React, { useState } from "react"
import memesData from "../memesData"
import defaultMemeImg from "../images/default-meme-img.png"

export default function Meme() {
    const [memeImg, setMemeImg] = useState(defaultMemeImg);
    
    function newMeme() {
        const memesArray = memesData.data.memes;
        const index = Math.floor(Math.random() * memesArray.length);
        setMemeImg(memesArray[index].url); 
        
    }

    
    return (
        <main>
        <div className="form">
            <div>
                <label className="form--label">Top text</label>
                <input 
                className="form--input" 
                type="text" 
                placeholder="Shut up" />
            </div>
            <div>
                <label className="form--label">Bottom text</label>
                <input 
                className="form--input" 
                type="text" 
                id="bottomText" 
                placeholder="And take my money" />
            </div>
            <button className="form--button" type="button" onClick={newMeme}>Get a new meme image 🖼️</button> 
              
        </div>    
        <img className="meme--image" src={memeImg} /> 
        </main>
    )
}