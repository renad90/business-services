import "../Header/Header.css";
import Header from "../Header/Header";
import "../Hero/Hero.css";

export default function Hero() {
  return (
    <div className="home-container" dir="rtl">
      <Header />

      <div className="hero">
        <video className="hero-video" autoPlay loop muted>
          <source src="/assets/Video.mp4"  type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-text">
          <h1>المركز السعودي للأعمال</h1>
          <p>وجهتك لبدء وممارسة وإنهاء أعمالك</p>
          <button className="btn">أكتشف المزيد</button>
        </div>
      </div>
    </div>
  );
}