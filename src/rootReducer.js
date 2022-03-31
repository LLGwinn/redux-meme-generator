const INITIAL_STATE = { allMemes: [] };

const rootReducer = (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case 'ADD_MEME':
            return {...state, 
                allMemes: [...state.allMemes, {...action.payload}]};
        case 'REMOVE_MEME': {
            return {...state,
                allMemes: state.allMemes.filter(m => 
                    {
                        return m.url !== action.payload
                    }
                )}
        }
        default:
            return state;
    }
}

export default rootReducer;