import { createContext,  useEffect,  useState } from "react";
import { fetchProducts } from "../service/ProductService";

const ProductContext = createContext();

 // eslint-disable-next-line react/prop-types
 function ProductContextProvider({children}){
    

    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([]);
    
    
    //load products
    useEffect(() => {
        async function loadProducts(){
            const products = await fetchProducts();
            setProducts(products)
            console.log(products)
        };
        
      loadProducts();
    }, []);

    //cart functions
    const addToCart = (product, quantity) => {
      console.log(product.id)
      setCartProducts((prevCartProducts) => {
        // 1. Verificar si el producto ya está en el carrito
        const existingProductIndex = prevCartProducts.findIndex(
          (item) => item.product.id === product.id
        );
  
        // 2. Si el producto ya existe, actualizar la cantidad
        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCartProducts];
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: updatedCart[existingProductIndex].quantity + quantity,
          };
          return updatedCart;
        }
  
        // 3. Si el producto no existe, agregarlo al carrito
        return [...prevCartProducts, { product, quantity }];
      });
    };
  
    // Para depurar: ver cambios en el carrito cada vez que se actualiza
    useEffect(() => {
      console.log("Cart changed:", cartProducts);
    }, [cartProducts]);
    

    return (
        <ProductContext.Provider value={{ products, cartProducts ,addToCart }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductContextProvider };
