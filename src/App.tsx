
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/ui/Footer"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import ScrollToTop from "./utils/ScrollToTop";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import NewArrivals from "./pages/NewArrivals";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar setQuery={setSearchQuery} query={searchQuery}/>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery}/>} />
          <Route path="/home/:slug" element={<ProductInfo />} />
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/termsAndConditions" element={<TermsAndConditionsPage/>} />
          <Route path="/new-arrivals" element={<NewArrivals searchQuery={searchQuery} scrollToTop={() => window.scrollTo(0, 0)}/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}



export default App
