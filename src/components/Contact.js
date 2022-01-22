import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/modals/contact.scss";
import Close from "../logo/close.svg";

const Result = () => {
  return <p>Votre message a bien été envoyé</p>;
};

const Contact = () => {
  const [modal, setModal] = useState(false);

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "poke_mail",
      "poke_message",
      e.target,
      "user_4pZtHgAYvI4HpQAguAQGD"
    );

    e.target.reset();

    showResult(true);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button className="btn-contact" onClick={toggleModal}>
        Contact
      </button>
      {modal && (
        <div className="contact-modal">
          <div className="overlay" onClick={toggleModal}></div>
          <form onSubmit={sendEmail} className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <img src={Close} alt="Close" />
            </button>
            <div>{result ? <Result /> : null}</div>
            <label>NOM Prénom</label>
            <input type="text" name="fullName" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Objet</label>
            <input type="text" name="object" required />
            <label>Message</label>
            <textarea type="text" name="message" required />

            <button className="btn-submit" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
