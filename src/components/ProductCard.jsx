/* eslint-disable react/prop-types */
import { useState } from "react";
import BuyButton from "./BuyButton"
const ProductCard = ({ name, id, price, image, category }) => {

    const [showQuantity, setShowQuantity] = useState(false);
    const product = { name, id, price, image, category }

    return (
        <li key={id} className="product-card">
            <img
                src={image.desktop}
                alt={name}
                className={`product-image ${showQuantity ? "border-card-image" : ""}`}

            />
            <div className="product-content">
                <p className="product-category">{category}</p>
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price.toFixed(2)}</p>
            </div>
            <div className="product-footer">
                <BuyButton showQuantity={showQuantity} setShowQuantity={setShowQuantity} product={product}/>
            </div>
        </li>


    )
}

export default ProductCard

