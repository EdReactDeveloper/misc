import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import reducer from './reducers/reducer'; 
import list from './reducers/listReducer'
import thunk from 'redux-thunk'; 

const middleware = [thunk]
const reducers = combineReducers({
  state: reducer,
  list
})

let store = createStore(reducers, applyMiddleware(...middleware))

window.store = store
export default store; 