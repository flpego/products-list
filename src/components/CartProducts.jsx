/* eslint-disable react/prop-types */
import DeleteIcon from "/src/assets/images/icon-remove-item.svg"
const CartProducts = ({ product, quantity }) => {

  if (quantity === 0) return null;
  return (
    <div className="">
      <div className="cart-product-card__container">

        <div className="cart-product-container">
          <p className="cart-product-name">{product.name}</p>
          <div className="product-info-container">
            <p className="quantity">{quantity}x</p>
            <p>@ ${product.price}</p>
            <p>${product.price * quantity}</p>
          </div>
        </div>
        <div>
          <button>
            <img src={DeleteIcon} alt="Cart Icon" className="cart-icon" />
          </button>
        </div>


      </div>
      <hr className="custom-hr" />
    </div>


  )
}

export default CartProducts