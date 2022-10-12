import React from 'react'
import ProductDetails from './ProductDetails'

function Product({name, description, price, image, onClickHandler}) {
  return (
    <div onClick={onClickHandler}>
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt="" />
            <div className="desc-price">
            {description && <p>{description}</p>}
            <div>${price.toFixed(2)}</div>
            </div>
            {/* <button className="add-to-cart-button"><p>Add to cart</p><img src={cartIcon}></img></button> */}
        </div>
    </div>
  )
}

export default Product
