import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> جميع الحقوق محفوظة للمركز السعودي للأعمال© </p>

        <ul className="footer-links flex">
          <li>
            <a>سياسة الخصوصية</a>
          </li>
          <li>
            <a>شروط الاستخدام</a>
          </li>
          <li>
            <a>اتصل بنا</a>
          </li>
        </ul>

        <img src="/assets/whiteSbcLogo.png" className="footer-img" alt="" />
      </div>
    </footer>
  );
}
