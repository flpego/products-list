import Cart from "./components/Cart"
import { ProductsList } from "./components/ProductsList"
import "./styles/styles.scss"

function App() {


  return (
    <>
      <div>
        <main>
          <ProductsList />
          <Cart />

        </main>
      </div>
    </>
  )
}

export default App
