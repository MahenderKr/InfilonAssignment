import {createStore,applyMiddleware} from 'redux'
import getDataReducer from './Reducers'
import thunk from 'redux-thunk'

 export const store=createStore(getDataReducer,applyMiddleware(thunk));
