import { products as initialProducts } from './mocks/products.json'

// Componentes
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilter } from './Hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { Nav } from './components/Nav.jsx'

function App() {
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <main className='main'>
        <Nav />
        <Products products={filteredProducts}/>
      </main>
      <Cart></Cart>
      {/* <Footer></Footer> */}
    </CartProvider>
  )
}

export default App
