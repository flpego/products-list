import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../service/ProductService";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductContextProvider({ children }) {


  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([]);
  const [quantityState, setQuantityState] = useState(0);
  const [totalCart, setTotalCart] = useState(0)
  //load products
  useEffect(() => {
    async function loadProducts() {
      const products = await fetchProducts();
      setProducts(products)
    };

    loadProducts();
  }, []);

  //cart functions
  const addToCart = (product, quantity) => {
    setCartProducts((prevCartProducts) => {
      // Buscar si el producto ya existe en el carrito
      const existingProductIndex = prevCartProducts.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCartProducts];
        if (quantity <= 0) {
          updatedCart.splice(existingProductIndex, 1);
        } else {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: quantity,
          };
        }
        return updatedCart;
      }
      if (quantity > 0) {
        return [...prevCartProducts, { product, quantity }];
      }
      // Si el producto no existe, lo agregamos con su cantidad inicial
      return [...prevCartProducts, { product, quantity }];
    });
  };

  const deleteProductFromCart = (product) => {
    setCartProducts((prevCartProducts) => {
      const newCart = prevCartProducts.filter((item) => item.product.id !== product.id);
      return [...newCart]; // Asegurar que el estado cambia
    });
  }

  // actualiza el total de cantidad
  useEffect(() => {
    const totalQuantity = cartProducts.reduce((sum, item) => sum + item.quantity, 0);
    setQuantityState(totalQuantity);
  }, [cartProducts]);

  // **Nuevo:** Calcular el total del carrito
  useEffect(() => {
    const newTotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setTotalCart(newTotal);
  }, [cartProducts]);

  return (
    <ProductContext.Provider value={{
      products,
      cartProducts,
      addToCart,
      quantityState,
      deleteProductFromCart,
      totalCart
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
