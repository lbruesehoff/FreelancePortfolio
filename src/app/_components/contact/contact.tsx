import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Work With Me</h1>
      <div className="contact-form">
        <div className="mockup-window bg-base-300 border">
          <div className="bg-base-200 flex justify-center px-4 window">
            <div className="window-container">
              <div className="window-title">Ask Me Anything</div>
              <div className="window-form">
                <label className="input input-bordered flex items-center gap-2 window-email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2 window-name">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Full Name" />
                </label>

                <textarea
                  className="textarea textarea-bordered window-textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-button-container">
                <button className="btn btn-primary form-button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
