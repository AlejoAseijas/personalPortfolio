import React from "react";

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div className="sectionHead">
        <span>SAY HELLO</span>
        <h2>CONTACT</h2>
      </div>

      <div className="contactContainer sectionContainer">
        <h3>Get in Touch</h3>
        <div className="contactTypes">
          <div className="flexContainer">
            <div className="typeBox">
              <i className="lni lni-envelope"></i>
              <a href="mailto:alex.m.calia@outlook.com">
                alex.m.calia@outlook.com
              </a>
              <p>Email Me</p>
            </div>
          </div>
          <div className="flexContainer">
            <div className="typeBox">
              <i className="lni lni-calendar"></i>
              <a
                href="https://calendly.com/alexcalia/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>
              <p>Schedule a Meeting</p>
            </div>
          </div>
        </div>
        <div className="contactFormContainer">
          <h3>Contact Form</h3>

          <form
            id="contactForm"
            action="https://formspree.io/mbjzeqpq"
            method="POST"
          >
            <label for="nameInput" className="srOnly"></label>
            <input
              type="text"
              id="nameInput"
              name="nameInput"
              className="nameInput"
              required
              placeholder="Your Name*"
            />
            <label for="emailInput" className="srOnly"></label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              className="emailInput"
              required
              placeholder="Your Email*"
            />
            <label for="subjectInput" className="srOnly"></label>
            <input
              type="text"
              id="subjectInput"
              name="subjectInput"
              className="subjectInput"
              required
              placeholder="Subject*"
            />
            <label for="messageInput" className="srOnly"></label>
            <textarea
              className="messageInput"
              name="messageInput"
              id="messageInput"
              required
              placeholder="Your Message*"
            ></textarea>
          </form>

          <button
            type="submit"
            className="formSend"
            target="_blank"
            form="contactForm"
            rel="noopener noreferrer"
          >
            SEND
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
