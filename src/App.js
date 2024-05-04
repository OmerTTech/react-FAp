import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/header.jsx";
import NoFound from "./pages/Error/noFound.jsx";
import Homepage from "./pages/Homepage/homepage.jsx";
import ProductsMenu from "./pages/Products/productMenu.jsx"
import Details from "./pages/Details/details.jsx";
import Category from "./pages/Categorys/Category.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/products' element={<ProductsMenu />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/products/category/:id' element={<Category />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
