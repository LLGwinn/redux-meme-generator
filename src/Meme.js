import React from 'react';
import './Meme.css'

function Meme( {url, top, bottom, remove} ) {
    const handleClick = (evt) => {
        evt.preventDefault();
        remove(url)
    }

    return(
        <div className='Meme'>
            <div>
                <span>{top}</span>
                <img src={url} alt="" />
                <span>{bottom}</span>
                <button onClick={handleClick}>Remove</button>
            </div>
        </div>
    )
}

export default Meme;