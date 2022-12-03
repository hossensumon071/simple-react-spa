import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  // console.log(props.product)
  const {name, img, seller, price, star} = props.product
  const {handleAddToCart, product} = props
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Ratings: {star} stars</small></p>
      </div>
      <button className="btn-cart" onClick={()=>handleAddToCart(product)}>
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;