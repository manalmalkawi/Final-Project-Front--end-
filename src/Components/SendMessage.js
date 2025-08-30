import React, { useState } from "react";

const SendMessage = () => {
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
    <div className="elementor-element elementor-element-41221e8 e-flex e-con-boxed e-con e-parent">
      <style>{`
        .section-title-two h2 {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin-bottom: 30px;
        }
        .form .form-group {
          margin-bottom: 20px;
        }
        .form-control {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 15px;
          color: #333;
        }
        .form-control:focus {
          outline: none;
          border-color: #28a745;
          box-shadow: 0 0 5px rgba(40,167,69,0.5);
        }
        .btn_one {
          background-color: #28a745;
          color: #fff;
          padding: 12px 40px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn_one:hover {
          background-color: #218838;
        }
        @media (max-width: 767px) {
          .row {
            display: block !important;
          }
          .col-md-6, .col-md-12 {
            width: 100%;
            margin-bottom: 15px;
          }
        }
      `}</style>

      <div className="e-con-inner">
        <div className="elementor-element elementor-element-ac36062 elementor-widget__width-initial elementor-widget elementor-widget-edusion-contact-form">
          <div className="elementor-widget-container">
            <div className="contact">
              <div className="section-title-two">
                <h2>Send your message.</h2>
              </div>

              <div className="form">
                <form
                  className="wpcf7-form init"
                  aria-label="Contact form"
                  onSubmit={handleSubmit}
                >
                  <fieldset className="hidden-fields-container">
                    <input type="hidden" name="_wpcf7" value="982" />
                    <input type="hidden" name="_wpcf7_version" value="6.1" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f982-p964-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="964"
                    />
                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  </fieldset>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <p>
                        <label>Name</label>
                        <br />
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
                        <label>Your Email</label>
                        <br />
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
                        <label>Your Subject</label>
                        <br />
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
                        <label>Your Message</label>
                        <br />
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
  );
};

export default SendMessage;
