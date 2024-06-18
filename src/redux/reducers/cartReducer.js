// reducers/cartReducer.js
import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../actions/cartActions';

const initialState = {
  cart: null,
  products: [],
  loading: false,
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CART_SUCCESS:
      return { ...state, cart: action.payload, loading: false };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
