import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
     .then(res => res.json())
     .then(data => setProducts(data))
  },[]);

  useEffect(() => {
    const storedCart = getStoredCart();
    for(const key in storedCart) {
      const addedProduct = products.find(product => product.key === key);
      console.log(addedProduct);
    }
  },[])

  const handleAddToCart = (product) => {
    console.log(product);
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <Product 
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;