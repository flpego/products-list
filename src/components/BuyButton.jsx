import { useContext, useState } from "react"
import CartIcon from "/src/assets/images/icon-add-to-cart.svg"
import IncrementIcon from "/src/assets/images/icon-increment-quantity.svg"
import DecrementIcon from "/src/assets/images/icon-decrement-quantity.svg"
import { ProductContext } from "../context/ProductContext"


// eslint-disable-next-line react/prop-types
const BuyButton = ({ showQuantity, setShowQuantity, product }) => {
    const { addToCart } = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1); // Estado para la cantidad

    // Alternar entre "Add to Cart" y controles de cantidad
    const toggleCart = () => {
        console.log(product)
        setShowQuantity(true);
        addToCart(product, quantity)
    };

    // Incrementar cantidad
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        addToCart(product, quantity)
    };

    // Decrementar cantidad 
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        } else {
            setShowQuantity(false); // Ocultar los controles si la cantidad es 0
        }
    };

    return (

        <div className="buy-button">
            {!showQuantity ? (
                <button className="add-to-cart" onClick={toggleCart}>
                    <img src={CartIcon} alt="Cart Icon" className="cart-icon" />
                    <p>Add to Cart</p>
                </button>
            ) : (
                <div className="quantity-controls">
                    <button onClick={decrementQuantity}>
                        <img src={DecrementIcon} alt="Decrement" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>
                        <img src={IncrementIcon} alt="Increment" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default BuyButton