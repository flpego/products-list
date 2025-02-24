import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg"

export const CartEmpty = () => {
  return (
    <div className="cart-empty-container">
     
        <div className="cart-empty-img-container">
            <img src={EmptyCartIcon} alt="cart-empty-image"></img>
            <p>Your added items will appear here</p>
        </div>
    </div>
  )
}
