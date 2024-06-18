import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/actions/cartActions';

const Cart = ({ setHeader }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const products = useSelector(state => state.cart.products);
  const loading = useSelector(state => state.cart.loading);

  useEffect(() => {
    setHeader("Cart Details");
    if (!cart) {
      dispatch(fetchCart());
    }
  }, [dispatch, setHeader, cart]); // Only dispatch fetchCart when cart is not already loaded

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (!cart || products.length === 0) {
    return <div>Cart is empty.</div>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
            <div>
              <img src={product.image} alt={product.title} width="100" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
