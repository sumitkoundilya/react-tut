import axios from 'axios';

export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const fetchCart = () => async (dispatch) => {
  dispatch({ type: FETCH_CART_REQUEST });
  try {
    // Fetch cart data
    const cartResponse = await axios.get("https://fakestoreapi.com/carts/2");
    const cartData = cartResponse.data;
    dispatch({ type: FETCH_CART_SUCCESS, payload: cartData });

    // Fetch products data
    const productPromises = cartData.products.map(async (product) => {
      const productResponse = await axios.get(`https://fakestoreapi.com/products/${product.productId}`);
      return productResponse.data;
    });

    const productsData = await Promise.all(productPromises);
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: productsData });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
    console.error("Error fetching cart or products:", error);
  }
};
