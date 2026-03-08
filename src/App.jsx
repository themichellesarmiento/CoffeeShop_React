import { useState } from "react";
import Menu from "./components/Pages/Menu";
import Home from './components/Pages/Home';
import BuildYourCoffee from "./components/Pages/BuildYourCoffee";
import Header from "./components/Layout/Header";
import Footer from './components/Layout/Footer';
import Cart from "./components/Cart";


const App = () => {
  const [page, setPage] = useState('Home');
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header updatePage={setPage} cart={cart} />
      {page === 'Home' && <Home />}
      {page === 'Menu' && <Menu setCart={setCart} />}
      {page === 'Build Your Coffee' && <BuildYourCoffee />}
      {page === 'Cart' && <Cart cart={cart} setCart={setCart} />}
      <Footer />
    </>
  )
}
export default App
