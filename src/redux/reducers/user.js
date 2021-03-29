import { GET_USER_REQ, GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/user'

const initialState = {
    loading: false,
    error: '',
    user: []
}

const userReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_USER_REQ: return {
            ...state,
            loading: true            
        }
        case GET_USER_SUCCESS: return {
            ...state,
            loading: false,
            user: action.payload
        }
        case GET_USER_FAIL: return {
            ...state,
            loading: false,
            user: [],
            error: action.payload
        }

        default: return state
    }
}

export default userReducer