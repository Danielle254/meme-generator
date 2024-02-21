import React from "react"

export default function Meme() {
    return (
        <main>
        <form className="form">
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
            <button className="form--button" type="button">Get a new meme image 🖼️</button> 
        </form>        
        </main>
    )
}