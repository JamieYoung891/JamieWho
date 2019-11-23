import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import data from './data'
import ui from './ui'

const rootReducer = combineReducers({ data, ui })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
)

export default store