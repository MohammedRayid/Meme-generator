import React from "react";
import data from "../data";

export default function Meme(){

        const [meme,setMeme] = React.useState({
            topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/4xgqu.jpg"
        })
        const [allMemeImages,setAllMemeImages] = React.useState(data);

        function getImage(){
            const array = allMemeImages.data.memes;
            const randomNumber = Math.floor(Math.random()*array.length);
            const url=array[randomNumber].url;
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage:url
            }))
        }

        function handlechange(event){
            const {name,value}=event.target
            setMeme(prevMeme=>({
                ...prevMeme,[name]:value
            }))
        }

        return(
        <main>
            <div className="form">
                <input 
                placeholder="Top text" 
                className="form-input" 
                type="text"
                name="topText"
                value={meme.topText}
                onChange={handlechange}
                 />
                <input 
                placeholder="Bottom text" 
                className="form-input" 
                type="text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handlechange}       
                />
                <button 
                    onClick={getImage}
                    className="form-btn">Get a new meme image ➕</button>
            </div>
            <div className="meme">
                <br></br>
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}