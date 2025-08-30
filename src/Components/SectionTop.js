import React from "react";
import { Link } from "react-router-dom";


const SectionTop = ({ title, breadcrumbs = [] }) => {
  return (
    <section
      className="section-top"
      style={{
        backgroundImage:
          "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png')",
      }}
    >
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div
            className="section-top-title wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <h1>{title}</h1>
            <ul>
              {breadcrumbs.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    ` / ${item.label}`
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
