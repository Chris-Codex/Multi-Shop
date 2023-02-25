import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./pages/Orders";
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
