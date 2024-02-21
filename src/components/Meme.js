import React from "react"

export default function Meme() {
    return (
        <div className="meme">
        <div className="form">
            <div className="input">
                <label for="topText" className="label">Top text</label>
                <input type="text" id="topText" placeholder="Shut up" />
            </div>
            <div className="input">
                <label for="bottomText" className="label">Bottom text</label>
                <input type="text" id="bottomText" placeholder="And take my money" />
            </div>
            
        </div>
        <button type="button">Get a new meme image 🖼️</button> 
        </div>
    )
}