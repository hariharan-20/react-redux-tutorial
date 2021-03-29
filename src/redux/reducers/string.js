import { CHANGE_STR } from '../actions/string'

const initialState = {
    value: "Hello"
}

const stringReducer = ( state = initialState, action ) => {
    switch(action.type){
        case CHANGE_STR: return {
            ...state,
            value: action.payload
        }        

        default: return state
    }
}

export default stringReducer