
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/ui/Footer"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import ScrollToTop from "./utils/ScrollToTop";
import TermsAndConditionsPage from "./pages/TermsAndConditions";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:slug" element={<ProductInfo />} />
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/termsAndConditions" element={<TermsAndConditionsPage/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}



export default App
