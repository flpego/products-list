import { useContext, useState } from "react"
import { CarbonIcon } from "../assets/icons/Icons"
import { ProductContext } from "../context/ProductContext"
import OrderModal from "./OrderModal"

const CartTotal = () => {
    const { totalCart } = useContext(ProductContext)
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="cart-total-container">
            <div className="cart-total-top">
                <p>Order Total</p>
                <span>$ {totalCart}</span>
            </div>
            <div className="cart-total-mid">
                <CarbonIcon />
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
            <div className="cart-total-bot">
                <button onClick={() => setShowModal(true)}>
                    Confirm Order
                </button>
            </div>
            {showModal && <OrderModal onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default CartTotal