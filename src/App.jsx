// import { useState } from "react";
// import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
    </div>
  );
}
export default App;

// const heroData = [
//   {
//     text1: "المركز السعودي للأعمال",
//     text2: "وجهتك لبدء وممارسة وإنهاء أعمالك",
//   },
//   { text1: "تسهيل بدء وممارسة", text2: "النشاط الإقتصادي في المملكة" },
//   {
//     text1: "تكامل مع الجهات الحكومية لتقديم",
//     text2: "أبرز الخدمات المتعلقة بالأعمال الاقتصادية",
//   },
// ];

// const [heroCount, setHeroCount] = useState(2);
// const [playStatus, setPlayStatus] = useState(true);

//<h1 style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}>مرحبا</h1>
