
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/ui/Footer"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (

      <>
        <ScrollToTop />
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home/:slug" element={<ProductInfo/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>

        <Footer/> 
      </>

  )
}

export default App
