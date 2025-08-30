
import React from "react";

const CoursePromotion = ({
  title = "Best Online Learning Platform",
  headline = "One Platfrom & Many <span><u>Courses</u></span> For You",
  description = "From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.",
  features = [
    "9/10 Average Satisfaction Rate",
    "96% Completitation Rate",
    "Friendly Environment & Expert Teacher",
  ],
  ctaText = "Explore Our Courses",
  ctaLink = "#",
  backgroundImage = "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png",
  imageSrc = "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png",
  imageAlt = "Best Online Learning Platform",
}) => {
  return (
    <section
      className="course_promo section-padding"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            <div className="cp_content">
              <h4>{title}</h4>
              <h2 dangerouslySetInnerHTML={{ __html: headline }}></h2>
              <p>{description}</p>
              <ul>
                {features.map((feature, i) => (
                  <li key={i}>
                    <span className="ti-check"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cp_btn">
              <a href={ctaLink} className="cta">
                <span>{ctaText}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="cp_img text-center text-lg-end mt-4 mt-lg-0">
              <img src={imageSrc} alt={imageAlt} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePromotion;
