// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import actorsReducer from './actorsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  actors: actorsReducer,
  // Add other reducers here if needed
});

export default rootReducer;
