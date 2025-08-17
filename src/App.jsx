// import { useState } from "react";
// import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import FAQs from "./Components/FAQs/FAQs";
import Footer from "./Components/Footer/Footer"
import "./App.css";
export default function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <About />
      <FAQs/>
      <Footer/>
    </div>
  );
}

