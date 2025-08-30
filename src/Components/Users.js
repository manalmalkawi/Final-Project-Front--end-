import React from "react";

const Users = ({ title, subtitle, features }) => {
  return (
    <div className="elementor-widget-container">
      <div className="bc_bg_two section-padding">
        <div className="container">
          <div className="section-title">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="single_feature_one">
                  <div className="sf_top">
                    <span className={`${feature.icon} ss_one`}></span>
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: `<a href="${feature.link}">${feature.title}</a>`,
                      }}
                    />
                  </div>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
