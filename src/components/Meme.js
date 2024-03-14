import React, { useState } from "react"


export default function Meme() {
    

    const [meme, setMeme] = useState(
        {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    
    const [allMemes, setAllMemes] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function newMeme() {
        const index = Math.floor(Math.random() * allMemes.length);
        const newUrl = allMemes[index].url
        setMeme(prevMeme => (
           {
            ...prevMeme,
            randomImage: newUrl
           } 
        ))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => (
            {        
            ...prevMeme,
            [name]: value
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
                name="topText"
                value={meme.topText}
                placeholder="Shut up" 
                onChange={handleChange} /></label>
            </div>
            <div>
                <label className="form--label">Bottom text
                <input 
                className="form--input" 
                type="text" 
                name="bottomText"
                value={meme.bottomText}
                placeholder="And take my money" 
                onChange={handleChange} /></label>
            </div>
            <button className="form--button" type="button" onClick={newMeme}>Get a new meme image 🖼️</button> 
              
        </div>    
        <div className="meme">
            <img className="meme--image" src={meme.randomImage} />
            <p className="meme--text top" >{meme.topText}</p> 
            <p className="meme--text bottom" >{meme.bottomText}</p> 
        </div>
        </main>
    )
}