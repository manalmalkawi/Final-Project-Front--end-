import React from "react";

const Questions = () => {
  return (
    <section className="section-padding">
      <div className="questions-grid">
        <div className="faq-column">
          <div className="section-title text-left">
            <h2>Frequently Asked Question</h2>
            <p>
              General <span><u>Questions</u></span>
            </p>
          </div>

          <div className="accordion" id="accordionExample">
            {[
              { question: "What does it take excellent author?", answer: "Great value and so easy to use and saves me so much time! Simple & easy." },
              { question: "Who will view my content?", answer: "Great value and so easy to use and saves me so much time! Simple & easy." },
              { question: "What does it take become an author?", answer: "Great value and so easy to use and saves me so much time! Simple & easy." },
              { question: "How to Change my Password easily?", answer: "Great value and so easy to use and saves me so much time! Simple & easy." },
              { question: "How does it create content?", answer: "Great value and so easy to use and saves me so much time! Simple & easy." },
            ].map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index + 1}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                    aria-expanded={index === 0}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index + 1}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="image-column">
          <img
            src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/faq.png"
            alt="FAQ"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .questions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 768px) {
          .questions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Questions;
