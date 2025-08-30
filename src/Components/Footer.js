import React from "react";

const Footer = ({ 
  logo, 
  aboutText, 
  socialLinks, 
  courses, 
  companyLinks, 
  contactInfo, 
  footerMenu,
  copyright
}) => {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="single_footer about_widget">
              <a href={logo.link}>
                <img src={logo.src} alt={logo.alt} />
              </a>
              <p>{aboutText}</p>
              <div className="foot_social">
                <span>Connect with: </span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.url}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 widget_nav_menu">
                <div className="single_footer">
                  <h4>Courses</h4>
                  <ul className="menu">
                    {courses.map((course, idx) => (
                      <li key={idx}>
                        <a href={course.link} onClick={(e) => e.preventDefault()}>
                          {course.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12 widget_nav_menu">
                <div className="single_footer">
                  <h4>Company</h4>
                  <ul className="menu">
                    {companyLinks.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.link} onClick={(e) => e.preventDefault()}>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12 widget_edusion-footer-contact-info">
                <div className="single_footer">
                  <h4>Contact Info</h4>
                  {contactInfo.map((info, idx) => (
                    <div className="sf_contact" key={idx}>
                      <span className={info.icon}></span>
                      <h3>{info.title}</h3>
                      <p>{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-btm fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>{copyright}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                {footerMenu.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} onClick={(e) => e.preventDefault()}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
