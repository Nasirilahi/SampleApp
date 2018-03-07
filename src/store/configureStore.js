import { applyMiddleware, compose, createStore } from "redux"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "../reducers";


export const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger, thunk),
  )
)
