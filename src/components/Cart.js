import React, { useEffect, useState } from "react";

const Cart = ({ setHeader }) => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setHeader("Carts Details");
    const fetchCart = async () => {
      try {
        const cartResponse = await fetch("https://fakestoreapi.com/carts/2");
        const cartData = await cartResponse.json();
        setCart(cartData);

        const productPromises = cartData.products.map(async (product) => {
          const productResponse = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
          return productResponse.json();
        });

        const productsData = await Promise.all(productPromises);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching cart or products:", error);
      }
    };

    fetchCart();
  }, []);

  if (!cart) {
    return <div>Loading cart...</div>;
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
