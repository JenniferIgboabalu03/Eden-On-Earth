import { Home } from "./components.jsx/Home"
import { About } from "./components.jsx/about"
import { Air_Purifying_plants, Aquatic_plants, Categories, Flowering_plants, Indoor_plants, Outdoor_plants, Tropical_plants } from "./components.jsx/categories"
import { Faqs } from "./components.jsx/faq's"
import { Footer } from "./components.jsx/footer"
import { Navbar } from "./components.jsx/navbar"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import { Reviews } from "./components.jsx/reviews"
import { Contact } from "./components.jsx/contact"
import { Shop } from "./components.jsx/shop"
import data from "./product_data"
import { useState } from "react"
import { Basket } from "./components.jsx/basket"

function App() {

  const { products } = data
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => { 
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist){ 
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x))
    } else{ 
      setCartItems([...cartItems, {...product, qty:1 }])
    }
  }

  const onRemove = (product) =>  {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{ 
      setCartItems(cartItems.map((x) => x.id === product.id ?  {...exist, qty: exist.qty - 1} : x))
    }
  }
  return (
    <Router>            
      <div>
        <Navbar countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element = {<Shop products={ products } onAdd={ onAdd } />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/reviews" element = {<Reviews />} />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/indoor plants" element={ <Indoor_plants /> } />
          <Route path="/outdoor plants" element={ <Outdoor_plants /> } />
          <Route path="/flowering plants" element={ <Flowering_plants /> } />
          <Route path="/tropical plants" element={ <Tropical_plants /> } />
          <Route path="/aquatic plants" element={ <Aquatic_plants /> } />
          <Route path="/purifying plants" element={ <Air_Purifying_plants /> } />
          <Route path="/basket" element={ <Basket onAdd={ onAdd } cartItems={ cartItems } onRemove= { onRemove } /> } />
        </Routes>
        <Footer />
      </div>      
    </Router> 
  )
}

export default App
