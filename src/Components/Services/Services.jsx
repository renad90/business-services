import "../Services/Services.css";
import { useState } from "react";

  function ServiceCard({ title}) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logo-container">
        <img
          src={hovered ? "/assets/Logo.png" : "/assets/LogoWhite.png"}
          className="logo-img"
          alt={title}
        />
      </div>
      <h1>{title}</h1>
    </section>
  );
}
  export default function Services() {
  const services=[
    {id:1, title:"توثيق التجارة الإلكترونية"},
    {id: 2, title: "إيداع القوائم المالية"},
    {id: 3, title:"الاستعلام عن متجر إلكتروني" },
    {id: 4, title: "إدارة التفاويض"},
    {id: 5, title: "إشهار حق الضمان"},
    {id: 6, title:"إصدار الرمز الإلكتروني" },
    {id: 7, title: "استقبال التلبيغات" },
    {id: 8, title: "تحديث بيانات السجل"},
  ];

return (
    <section id="services" className="section">
      <h1 className="title">الخدمات الإلكترونية</h1>
      <div className="services">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
}

//   return (
//     <section id="services" className="section">
//       <h1 className="title"> الخدمات الإلكترونية</h1>
//       <div className="services">
//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>توثيق التجارة الإلكترونية</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>إيداع القوائم المالية</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>الاستعلام عن متجر إلكتروني</h1>
//         </section>

//         <section
//           className="service-card"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           <div className="logo-container">
//             <img
//               src={hovered ? "/assets/Logo.png" : "/assets/LogoWhite.png"}
//               className="logo-img"
//               alt="Logo"
//             />
//           </div>
//           <h1>إدارة التفاويض</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>إدارة التفاويض</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>إدارة التفاويض</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>إدارة التفاويض</h1>
//         </section>

//         <section className="service-card">
//           <div className="logo-container">
//             <img src="/assets/LogoWhite.png" className="logo-img" alt="Logo" />
//           </div>
//           <h1>إدارة التفاويض</h1>
//         </section>
//       </div>
//     </section>
//   );
// }
