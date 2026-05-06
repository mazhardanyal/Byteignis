import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>

      {/* BACKGROUND (always behind everything) */}
      <div className="fixed inset-0 -z-10">
        <BackgroundAnimation />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
<Home  />
        <Footer />
      </div>
    </>
  );
}

export default App;