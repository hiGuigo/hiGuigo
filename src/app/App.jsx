import Navbar from "../widgets/header/ui/Navbar";
import Footer from "../widgets/footer/ui/Footer";
import HomePage from "../pages/home/ui/HomePage";
import Background from "../widgets/background/ui/Background";
import "./app.css";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <div className="site-content">
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
