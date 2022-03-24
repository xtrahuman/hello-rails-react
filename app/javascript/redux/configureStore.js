import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { greetReducer } from './greeting/greet';

const reducers = combineReducers({
  greetReducer
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
)

export default store;