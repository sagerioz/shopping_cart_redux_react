// this takes all the reducers from this folder and combine into a root reducer here

import cart from './cart.js';
// helper function here:
import { combineReducers } from 'redux';
// this is how it's used:
const rootReducer = combineReducers({
  cart: cart
  // in ES6 you can just write the following:
  // cart
});

export default rootReducer;
