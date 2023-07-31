import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./components/Product";
import ProductsPage from "./pages/ProductsPage";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Product/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/category/:name" element={<Category/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>


        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
