import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";



const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_0njhytm",
        "template_ej62gyr",
        templateParams,
        "1E6dtKOZtC9d6BJjD"
      )
      .then(
        (response) => {
          
          alert("Mensagem enviada!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Mensagem nao enviada: ", error);
        }
      );
  }

  return (
    <>


      <div className={styles.contactContainer}>
        <div className={styles.contactTitle}>
          <span>
            CONTATO
          </span>
        </div>
        <form className={styles.formContact} onSubmit={sendEmail}>
          <input
            className={styles.inputContact}
            type="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            className={styles.inputContact}
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
              value={email}
              required

          />
          <textarea
            className={styles.textareaContact}
            type="text"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <button className={styles.buttonContact}>ENVIAR</button>
        </form>
      </div>
    </>
  );
};

export default ContactContent;
