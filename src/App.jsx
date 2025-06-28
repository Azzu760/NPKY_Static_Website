import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Header />
      <main>
        <Home />
        <About />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
