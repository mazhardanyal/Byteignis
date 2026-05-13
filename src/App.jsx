import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";  // Changed from Contact to ContactUs

function App() {
  return (
    <Router>
      {/* BACKGROUND (always behind everything) */}
      <div className="fixed inset-0 -z-10">
        <BackgroundAnimation />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;