import SectionTop from "./SectionTop";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <SectionTop
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact Us" }
        ]}
      />

      <div className="page-builder-template">
        <div data-elementor-type="wp-page" data-elementor-id="964" className="elementor elementor-964">

          <div className="elementor-element elementor-element-27295fe e-flex e-con-boxed e-con e-parent">
            <div
              className="e-con-inner"
              style={{
                display: "flex",
                flexDirection:"row",
                justifyContent: "center",
                alignItems: "stretch",
                maxWidth: "900px",
                margin: "0 auto",
                paddingBottom: "40px",
                gap: "0",
              }}
            >
              <div className="elementor-element elementor-element-43cbc8f e-con-full e-flex e-con e-child"
                   style={{ flex: 1, borderRight: "1px solid #ddd", textAlign: "center", padding: "0 20px" }}>
                <div className="elementor-widget-container">
                  <div className="single_address">
                    <i className="ti-map"></i>
                    <h4>Our Location</h4>
                    <p>3481 Melrose Place, Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-1fe48f3 e-con-full e-flex e-con e-child"
                   style={{ flex: 1, borderRight: "1px solid #ddd", textAlign: "center", padding: "0 20px" }}>
                <div className="elementor-widget-container">
                  <div className="single_address">
                    <i className="ti-mobile"></i>
                    <h4>Telephone</h4>
                    <p>(+1) 517 397 7100, (+1) 411 315 8138</p>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-600600e e-con-full e-flex e-con e-child"
                   style={{ flex: 1, textAlign: "center", padding: "0 20px" }}>
                <div className="elementor-widget-container">
                  <div className="single_address">
                    <i className="ti-email"></i>
                    <h4>Send email</h4>
                    <p>Info@example.com, admin@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-41221e8 e-flex e-con-boxed e-con e-parent">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ac36062 elementor-widget__width-initial elementor-widget elementor-widget-edusion-contact-form">
                <div className="elementor-widget-container">
                  <div className="contact" style={{ maxWidth: "700px", margin: "50px auto 0" }}>
                    <div className="section-title-two">
                      <h2>Send your message.</h2>
                    </div>
                    <div className="form">
                      <form className="wpcf7-form init" aria-label="Contact form" onSubmit={handleSubmit}>
                        <fieldset className="hidden-fields-container">
                          <input type="hidden" name="_wpcf7" value="982" />
                          <input type="hidden" name="_wpcf7_version" value="6.1" />
                          <input type="hidden" name="_wpcf7_locale" value="en_US" />
                          <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f982-p964-o1" />
                          <input type="hidden" name="_wpcf7_container_post" value="964" />
                          <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                        </fieldset>

                        <div className="row">
                          <div className="form-group col-md-6">
                            <p>
                              <label>Name</label><br />
                              <input
                                type="text"
                                name="name"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </p>
                          </div>

                          <div className="form-group col-md-6">
                            <p>
                              <label>Your Email</label><br />
                              <input
                                type="email"
                                name="email"
                                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </p>
                          </div>

                          <div className="form-group col-md-12">
                            <p>
                              <label>Your Subject</label><br />
                              <input
                                type="text"
                                name="subject"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                              />
                            </p>
                          </div>

                          <div className="form-group col-md-12">
                            <p>
                              <label>Your Message</label><br />
                              <textarea
                                name="message"
                                cols="40"
                                rows="10"
                                className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                                value={formData.message}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </p>
                          </div>

                          <div className="col-md-12 text-center">
                            <p>
                              <input
                                type="submit"
                                className="wpcf7-form-control wpcf7-submit has-spinner btn_one"
                                value="Send Message"
                              />
                              <span className="wpcf7-spinner"></span>
                            </p>
                          </div>
                        </div>

                        <div className="wpcf7-response-output" aria-hidden="true"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
