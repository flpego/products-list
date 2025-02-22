import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"




export function ProductsList() {
    const { products } = useContext(ProductContext)
    return (
        <div className="product-list-container">
            <h2>Desserts</h2>

            <ul className="products-list">
            {products.map((product) => (
                
                <ProductCard
                    name={product.name}
                    id={product.id}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    key={product.id}
                />
            ))}
        </ul>
        </div>
        
    )
}
