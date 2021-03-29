import { applyMiddleware, createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import Thunk from 'redux-thunk'
import counterReducer from './reducers/counter'
import stringReducer from './reducers/string'
import userReducer from './reducers/user'

const rootReducer = combineReducers({
    counter: counterReducer,
    string: stringReducer,
    user: userReducer
})

const Composed = compose(applyMiddleware(Thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), )

const store = createStore(
    rootReducer,
    Composed
)

export default store