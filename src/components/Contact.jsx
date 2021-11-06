import React from "react";

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div className="sectionHead">
        <span>SAY HELLO</span>
        <h2>CONTACT</h2>
      </div>

      <div className="contactContainer sectionContainer">
        <div className="contactFormContainer">
          <h3>Formulario de contacto</h3>
          <form
            id="contactForm"
            action="https://formspree.io/f/mwkadwrr"
            method="POST"
          >
            <label htmlFor="nameInput" className="srOnly"></label>
            <input
              type="text"
              id="nameInput"
              name="nameInput"
              className="nameInput"
              required
              placeholder="Your Name*"
            />
            <label htmlFor="emailInput" className="srOnly"></label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              className="emailInput"
              required
              placeholder="Your Email*"
            />
            <label htmlFor="subjectInput" className="srOnly"></label>
            <input
              type="text"
              id="subjectInput"
              name="subjectInput"
              className="subjectInput"
              required
              placeholder="Subject*"
            />
            <label htmlFor="messageInput" className="srOnly"></label>
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
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
