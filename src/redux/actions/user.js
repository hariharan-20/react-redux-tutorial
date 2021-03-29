import axios from 'axios'

export const GET_USER_REQ = 'GET_USER_REQ'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const getUserReq = () => {
    return {
        type: GET_USER_REQ,
        info: 'to get user'
    }
}

export const getUserSuccess = (users) => {
    return {
        type: GET_USER_SUCCESS,
        payload: users,
        info: 'on req success'
    }
}

export const getUserFailiure = (errMessage) => {
    return {
        type: GET_USER_FAIL,
        payload: errMessage,
        info: 'on req fail'
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch(getUserReq())
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(getUserSuccess(res.data))            
        })
        .catch(err => {
            dispatch(getUserFailiure(err.message))            
        })
    }
}
