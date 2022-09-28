import React from 'react';
import memeData from './memesData'

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [allMemes, setAllMemes] = React.useState(memeData)

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(response => response.json())
            .then(data => setAllMemes(data))
    },[])
    
    const getMemeImage = () => {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            topText: '',
            bottomText: '',
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className='form'>
                <input
                    type='text' 
                    className='form--input'
                    placeholder='Top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                 />
                <input 
                    type='text' 
                    className='form--input'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage}className='form--button'>Get a new meme image</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt='meme' className='meme--image'></img>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;