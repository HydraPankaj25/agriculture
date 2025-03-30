import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Made2Order from "./pages/Made2Order";
import Store from "./pages/Store";
import Learn from "./pages/Learn";
import LearnDetails from "./pages/LearnDetails";
import Plan from "./pages/Plan";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/made2order" element={<Made2Order />} />
        <Route path="/store" element={<Store />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learnDetail/:id" element={<LearnDetails />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
