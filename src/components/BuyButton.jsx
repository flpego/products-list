import { useContext } from "react"
import CartIcon from "/src/assets/images/icon-add-to-cart.svg"
import { ProductContext } from "../context/ProductContext"
import { DecrementIcon, IncrementIcon } from "../assets/icons/Icons"

// eslint-disable-next-line react/prop-types
const BuyButton = ({ showQuantity, setShowQuantity, product }) => {
    const { addToCart, cartProducts  } = useContext(ProductContext)
   


    const productInCart = cartProducts.find((item) => item.product.id === product.id);
    const quantity = productInCart ? productInCart.quantity : 0;

    // Alternar entre "Add to Cart" y controles de cantidad
    const toggleCart = () => {
        setShowQuantity(true);
        addToCart(product, 1)
    };

    // Incrementar cantidad
    const incrementQuantity = () => {
        addToCart(product, quantity + 1);
         //execute after to render
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            addToCart(product, quantity - 1);
        } else {
            setShowQuantity(false);
            addToCart(product, 0); // Elimina el producto del carrito
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
                        <DecrementIcon className="quantity-icons" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>
                        <IncrementIcon className="quantity-icons"/>
                    </button>
                </div>
            )}
        </div>
    )
}

export default BuyButton