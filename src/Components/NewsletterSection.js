import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FaPaperPlane } from "react-icons/fa";

const MAILCHIMP_URL = "https://ManalMalkawi.usX.list-manage.com/subscribe/post?u=XXXXXXX&id=YYYYYYY";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const CustomForm = ({ status, message, onValidated }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      email &&
        email.indexOf("@") > -1 &&
        onValidated({ EMAIL: email });
    };

    return (
      <form onSubmit={handleSubmit} className="mc4wp-form d-flex newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email Address"
          className="form-control subscribe__input"
          required
        />
        <button type="submit" className="subscribe__btn">
          <FaPaperPlane className="plane-icon" />
        </button>
        <div className="mc4wp-response mt-2">
          {status === "sending" && <div>Sending...</div>}
          {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div dangerouslySetInnerHTML={{ __html: message }} />}
        </div>
      </form>
    );
  };

  return (
    <section className="newsletter_area section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
            <div className="subs_form">
              <h3>Subscribe to our newsletter, We don't make any spam.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                eiusmod tempor enim minim
              </p>
              <div className="home_subs">
                <MailchimpSubscribe
                  url={MAILCHIMP_URL}
                  render={({ subscribe, status, message }) => (
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={subscribe}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .newsletter-form {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .subscribe__input {
          flex: 1;
          padding: 12px 20px;
          border-radius: 50px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        .subscribe__btn {
          background: #2eca7f;
          border: none;
          border-radius: 50px;
          padding: 12px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(46, 202, 127, 0.6);
        }
        .subscribe__btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(46, 202, 127, 0.8);
        }
        .plane-icon {
          color: white;
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        .subscribe__btn:hover .plane-icon {
          transform: translateX(5px) rotate(20deg);
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
