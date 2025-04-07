import "./FAQ.css";

const FAQ = () => {

  const faqs = [
    {
      id: 1,
      question: "¿Qué es una eSIM?",
      answer: "Una eSIM es una tarjeta SIM digital que te permite activar un plan móvil sin necesidad de usar una tarjeta SIM física.",
    },
    {
      id: 2,
      question: "¿Cómo activo mi eSIM?",
      answer: "Puedes activar tu eSIM escaneando el código QR proporcionado o ingresando manualmente el código de activación.",
    },
    {
      id: 3,
      question: "¿Qué dispositivos son compatibles con eSIM?",
      answer: "Los dispositivos compatibles con eSIM incluyen los últimos modelos de iPhone, Samsung Galaxy, Google Pixel y otros dispositivos modernos.",
    },
    {
      id: 4,
      question: "¿Puedo usar mi eSIM en varios dispositivos?",
      answer: "No, una eSIM está vinculada a un dispositivo específico. Si deseas usarla en otro dispositivo, deberás transferirla o solicitar una nueva.",
    },
  ];

  return (
    <div className="container faq-container">
      <h2 className="subtitle-special text-center">Preguntas frecuentes</h2>

      <div className="accordion mt-4 faq-content" id="faqAccordion">
        {faqs.map((faq) => (
          <div className="accordion-item faq-item" key={faq.id}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                className="accordion-button faq-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${faq.id}`}
                aria-expanded="false"
                aria-controls={`collapse${faq.id}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${faq.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
