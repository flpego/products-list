import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";


const DinamicTitle = () => {
    const {quantityState} = useContext(ProductContext);
    return (
        <div className="custom-dinam-title">
            <h4>You Cart ({quantityState})</h4>
        </div>
    )
}

export default DinamicTitle