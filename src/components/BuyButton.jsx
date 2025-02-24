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
        setShowQuantity(true);
        setQuantity(1);
        addToCart(product, 1)
    };

    // Incrementar cantidad
    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setTimeout(() => addToCart(product, newQuantity), 0); //execute after to render
    };

    const decrementQuantity = () => {
        const newQuantity = Math.max(0, quantity - 1);
        setQuantity(newQuantity);
        if (newQuantity === 0) {
            setShowQuantity(false);
        }

        setTimeout(() => addToCart(product, newQuantity), 0);
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