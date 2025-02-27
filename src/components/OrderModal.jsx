import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ConfirmedIcon } from "../assets/icons/Icons";

const OrderModal = ({ onClose }) => {
    const { cartProducts, totalCart } = useContext(ProductContext);

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="confirm-order-top">
                    <ConfirmedIcon />
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>

                <div className="order-summary">
                    <div className="order-item-container">
                        {cartProducts.map((item) => (
                            <div key={item.product.id} className="order-item">

                                <div className="order-product-item">
                                    <img src={item.product.image.thumbnail} alt={item.product.name} />
                                    <div className="order-pr-info">
                                        <p >{item.product.name}</p>
                                        <div>
                                            <span className="quantity">{item.quantity}x</span>
                                            <span className="order-sinle-price"> @ ${item.product.price.toFixed(2)}</span>
                                        </div>

                                    </div>

                                </div>
                                <p className="order-quantity-price">${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="order-total">
                        <p>Order Total:</p>
                        <span>${totalCart.toFixed(2)}</span>
                    </div>

                </div>

                <button className="new-order-btn" onClick={onClose}>Start New Order</button>
            </div>
        </div>
    );
};

export default OrderModal;
