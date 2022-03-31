import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './Form';
import Meme from './Meme';

// memes: unsplash.com/s/photos/meme

function App() {
  const allMemes = useSelector(state => state.allMemes);
  const dispatch = useDispatch();

  function addNewMeme(inputData) {
    dispatch({type: 'ADD_MEME', payload: inputData})
  }

  function removeMeme(target) {
    dispatch({type: 'REMOVE_MEME', payload: target})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Create Your Own Meme!</h2>
        <Form add={addNewMeme} />
        <div className='App-memes'>
          {allMemes.map(meme =>  <Meme 
                                    key={meme.url}
                                    remove={removeMeme}
                                    url = {meme.url}
                                    top = {meme.topText}
                                    bottom = {meme.bottomText} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
