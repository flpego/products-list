import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import CartProducts from "./CartProducts"
import { CartEmpty } from "./CartEmpty"
import DinamicTitle from "./DinamicTitle"

const Cart = () => {
  const { cartProducts } = useContext(ProductContext)
  console.log(cartProducts)

  return (
    <div className="cart-container">
      <DinamicTitle />
      {cartProducts.length === 0 ? (<CartEmpty />) :
        (cartProducts.map((cartItem) => (

          <CartProducts
            product={cartItem.product}
            quantity={cartItem.quantity}
            key={cartItem.product.id}
            className="cart-products-container"
          />
          
        )))
      }
    </div>
  )
}

export default Cart