import {combineReducers} from "redux";

import filters from './filters.js';
import burgers from './burgers.js';
import cart from './cart.js';

const rootReduser = combineReducers({
  filters,
  burgers,
  cart,
})

export default rootReduser