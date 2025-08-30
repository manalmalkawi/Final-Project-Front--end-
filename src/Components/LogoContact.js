import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoContact = () => {
  return (
    <section className="logo-contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-top-contact">
              <i className="fa fa-phone"></i>
              <h4> +(354) 6800 37849 </h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-top-contact">
              <i className="fa fa-envelope"></i>
              <h4>
                <a href="mailto:hello@edusion.com">hello@edusion.com</a>
              </h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="single-top-contact">
              <i className="fa fa-clock-o"></i>
              <h4>Mon to Sat Open: 9am - 6pm</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="top_social_profile">
              <ul>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-pinterest"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoContact;
