import "../About/About.css";

export default function About() {
  return (
    <section className="section2">
      <h1 className="about-title">عن المركز</h1>
      <div className="about-container">
        <div className="about-hover">
          <img src="/assets/image2.webp" className="about-img" />
          <div className="hover-content">
            <img src="/assets/whiteSbcLogo.png" className="hover-icon" alt="" />
            <p className="hover-text">مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها، وإنهائها، وتقديم جميع الخدمات ذات الصلة؛ وفقًا لأفضل الممارسات الدولية. وقد أُسس المركز بموجب قرار مجلس الوزراء رقم (456)، الصادر بتاريخ 11 شعبان 1440هـ، وبموجبه يرتبط تنظيميًا بمجلس الشؤون الاقتصادية والتنمية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
