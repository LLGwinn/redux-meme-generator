import React, {useState} from 'react';
import './Form.css'

function Form( {add} ) {
    const INITIAL_VALUES = {url: "", topText: "", bottomText: ""};
    const [formData, setFormData] = useState(INITIAL_VALUES);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const addMeme = (evt) => {
        evt.preventDefault();
        add( {...formData} );
        setFormData(INITIAL_VALUES);
    }

    return(
        <div>
            <form className='Form' onSubmit={addMeme}>
                <label htmlFor='url'>Image URL:</label>
                <input type='text' 
                       name='url' 
                       value={formData.url}
                       onChange = {handleChange} />
                <label htmlFor='topText'>Top text:</label>
                <input type='text' 
                       name='topText' 
                       value={formData.topText}
                       onChange = {handleChange} />                       
                <label htmlFor='bottomText'>Bottom text:</label>
                <input type='text' 
                       name='bottomText' 
                       value={formData.bottomText}
                       onChange = {handleChange} />
                <button type='submit'>Create Meme!</button>
            </form>
        </div>
    )
}

export default Form;