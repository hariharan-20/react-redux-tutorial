export const CHANGE_STR = 'CHANGE_STR'

export const changeStr = (value) => {
    return{
        type: CHANGE_STR,
        payload: value,
        info: 'to change string'
    }
}