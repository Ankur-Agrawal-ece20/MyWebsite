import React, { useState } from "react";
import "./styles/contact.css"

const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbybDrZMVEtD3_ak7jp83hcuOuM79bhXYuLG7X2d3mD_xoTRROu2uV5oVyaniRXDlus2lQ/exec";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <div id="main">
      <iframe name="hiddenFrame" className="hide" title="hidden"></iframe>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="hiddenFrame"
        className="btn"
      >
        {
          submitted ?
            <>
              <div id="thank">Thank you!</div>
              <h2>We'll be in touch soon.</h2>
            </>
            : <>
              <div id="title">
                Contact Me
              </div>
              <div id="username">
                <input type="text" placeholder="Your name" name="Name" required />
              </div>
              <div id="email">
                <input type="email" placeholder="Email" name="Email" required />
              </div>
              <div id="phone">
                <input type="tel" name="Mobile" placeholder="Phone No" pattern="[0-9]+" required/>
              </div>
              <div id="message">
                <textarea placeholder="Your message" name="Query" required />
              </div>
              <div id="submit">
                <button type="submit"> Send a message </button>
              </div>
            </>
        }
      </form>
    </div>
  )
};

export default ContactForm;