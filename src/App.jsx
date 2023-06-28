import Description from "./components/Description"
import Header from "./components/Header"
import Product from "./components/Product"
import Footer from "./components/footer"
import './styles/app.scss'

function App () {
  return (
    <div className="container">
      <Header />
      <Product />
      <Description />
      <Footer />
    </div>
  )
}

export default App
