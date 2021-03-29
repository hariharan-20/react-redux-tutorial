import { COUNTER_ADD } from '../actions/counter'
import { COUNTER_DEC } from '../actions/counter'

const initialState = {
    number: 0
}

const counterReducer = ( state = initialState, action) => {
    switch(action.type){
        case COUNTER_ADD: 
        return {
            ...state,
            number: state.number + 1
        }
        // return state.number + 1

        case COUNTER_DEC: 
        return {
            ...state,
            number: state.number - 1
        }
        // return state.number - 1

        default: return state
    }
}

export default counterReducer