import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk'
import { reducer as interviewReducer } from "./interviewReducer/reducer";

const rootReducer = combineReducers({
  interviewReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
