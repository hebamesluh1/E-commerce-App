import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./components/Product";
import ProductsPage from "./pages/ProductsPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Product/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
