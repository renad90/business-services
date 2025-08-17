import "../Services/Services.css";
import { useState } from "react";
export default function Services() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="services" className="section">
      <h1 className="title"> الخدمات الإلكترونية</h1>
      <div className="services">
        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>توثيق التجارة الإلكترونية</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>إيداع القوائم المالية</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>الاستعلام عن متجر إلكتروني</h1>
        </section>

        <section
          className="service-card"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="logo-container">
            <img
              src={hovered ? "/assets/Logo.png" : "/assets/LogoWhite.png"}
              className="logo-img"
              alt="Logo"
            />
          </div>
          <h1>إدارة التفاويض</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>إدارة التفاويض</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>إدارة التفاويض</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>إدارة التفاويض</h1>
        </section>

        <section className="service-card">
          <div className="logo-container">
            <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
          </div>
          <h1>إدارة التفاويض</h1>
        </section>
      </div>
    </section>
  );
}
