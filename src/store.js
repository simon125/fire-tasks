import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import todos from './state/todos'

// import auth, { initAuthUserSync } from './state/auth'


const reducer = combineReducers({
  
    todos,
  
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

// store.dispatch(initAuthUserSync())

// store.dispatch(initCounterSync())