
import React from "react";
import { FaCheckCircle, FaGraduationCap, FaChalkboardTeacher, FaCertificate, FaBook } from "react-icons/fa";


const PricingSection = ({ sectionData }) => {

  const PricingCard = ({ plan, price, period, yearly, features, ctaText, ctaLink }) => (
    <div
      className="single-pricing text-center p-4 border rounded shadow-sm mb-4"
      style={{
        background: "#2eca7f",
        padding: "60px 40px",
        borderRadius: "30px",
        boxShadow: "0px 0px 150px 0px rgba(78, 67, 250, 0.06)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="price-head mb-3">
        <h2>{plan}</h2>
        <h1>{price}</h1>
        <span>{period}</span>
        {yearly && <span className="upgrade_price d-block mt-1">{yearly}</span>}
      </div>
      <ul className="list-unstyled mb-3 text-start">
        {features.map((feature, i) => (
          <li key={i} className="d-flex align-items-center mb-2">
            {feature.icon && <feature.icon className="me-2 text-white" />}
            {feature.text}
          </li>
        ))}
      </ul>
      <a href={ctaLink} className="price_btn">{ctaText}</a>
    </div>
  );

  return (
    <section className="pricing-section py-5 pricing_design">
      <div className="container">
        <div className="section-title text-left mb-5">
          <h2 dangerouslySetInnerHTML={{ __html: sectionData.title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: sectionData.subtitle }}></p>
        </div>
        <div className="row justify-content-center">
          {sectionData.cards.map((card, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

