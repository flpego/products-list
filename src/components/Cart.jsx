import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import CartProducts from "./CartProducts"
import { CartEmpty } from "./CartEmpty"
import DinamicTitle from "./DinamicTitle"
import CartTotal from "./CartTotal"

const Cart = () => {
  const { cartProducts } = useContext(ProductContext)

  const isEmpty = cartProducts.length === 0;
  
  return (
    <div className="cart-container">
      <DinamicTitle />
      {isEmpty ? (
        <CartEmpty />
      ) : (
        <>
          {cartProducts.map(({ product, quantity }) => (
            <CartProducts
              key={product.id}
              product={product}
              quantity={quantity}
              className="cart-products-container"
            />
          ))}
          <CartTotal />
        </>
      )}

    </div>
  )
}

export default Cart