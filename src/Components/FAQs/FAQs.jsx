import { useState } from "react";
import "../FAQs/FAQs.css";

const faqsData = [
  {
    question: "ماهو المركز السعودي للأعمال؟",
    answer:
      "مركز حكومي يُعنى بتيسير بدء وممارسة وإنهاء العمل الاقتصادي في المملكة للمستثمرين ورواد الأعمال. وتم تأسيس المركز بموجب قرار مجلس الوزراء رقم (456) الصادر بتاريخ 11 شعبان 1440 هـ، الذي نصّ على تأسيس المركز السعودي للأعمال الاقتصادية واعتماد تنظيمه، وبموجبه يرتبط تنظيميًا بمجلس الشؤون الاقتصادية والتنمية",
  },
  {
    question: "ما أهداف المركز السعودي للأعمال؟",
    answer:
      "يهدف المركز إلى تيسير إجراءات بدء الأعمال الاقتصادية ومزاولتها وإنهائها، وتقديم جميع الخدمات والأعمال ذات الصلة بها وفقًا لأفضل الممارسات الدولية",
  },
  {
    question: "ماهي رؤية المركز السعودي للأعمال؟",
    answer:
      "أن تصبح المملكة إحدى الدول العشر الرائدة في العالم في جودة وسلاسة وكفاءة الخدمات الحكومية الموجهة لقطاع الأعمال",
  },
  {
    question: " هل خدمات المركز السعودي للأعمال بمقابل مادي؟",
    answer:
      "المركز السعودي للأعمال هو مركز حكومي ولا يوجد أي رسوم مادية للخدمات المقدمة من قِبل المركز، الرسوم المطلوبة هي الرسوم الحكومية الخاصة بخدماتها",
  },
  {
    question: "من هم المستفيدون من خدمات المركز السعودي للأعمال؟",
    answer: "المستثمرون ورواد الأعمال",
  },
];

export default function FAQs() {
  const [active, setActive] = useState(false);

  const expandAnswer = (index) => {
    setActive(active === index ? false : index);
  };

  return (
    <section className="section3">
      <div className="faqs-container">
        <h1 className="about-title">الأسئلة الشائعة</h1>
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => expandAnswer(index)}>
              {faq.question}
            </div>
            {active === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
