export const COUNTER_ADD = 'COUNTER_ADD'
export const COUNTER_DEC = 'COUNTER_DEC'

export const addCounter = () => {
    return {
        type: COUNTER_ADD,
        info: 'increment counter'
    }
}

export const decCounter = () => {
    return{
        type: COUNTER_DEC,
        info : 'decrement counter'
    }
}
