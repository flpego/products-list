/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DeleteIcon } from "../assets/icons/Icons";
import { ProductContext } from "../context/ProductContext";
const CartProducts = ({ product, quantity }) => {
  const {deleteProductFromCart} = useContext(ProductContext)
  if (quantity === 0) return null;
  return (
    <div className="">
      <div className="cart-product-card__container">

        <div className="cart-product-container">
          <p className="cart-product-name">{product.name}</p>
          <div className="product-info-container">
            <p className="quantity">{quantity}x</p>
            <p>@ ${product.price}</p>
            <span>${product.price * quantity}</span>
          </div>
        </div>
        <div>
          <button className="delete-buttons" onClick={() => deleteProductFromCart(product)}>
            <DeleteIcon className="delete-icon"/>
          </button>
        </div>


      </div>
      <hr className="custom-hr" />
    </div>


  )
}

export default CartProducts