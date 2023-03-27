import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./pages/Orders";
import Checkout from './components/Checkout/Checkout';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { ContextProvider } from './context/contextApi';




function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="product_desc/:id" element={<SingleProduct />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
