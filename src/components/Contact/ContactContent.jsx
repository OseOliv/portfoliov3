import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import bgHome from "../../assets/img/others/dev.png";

import "react-toastify/dist/ReactToastify.css";

const ContactContent = () => {
  const notify = () =>
    toast("Mensagem enviada com sucesso !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

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
      <div className={styles.backgroundContainer}>
        <div className={styles.overlay}></div>
        <img
          src={bgHome}
          alt="background dev"
          className={styles.backgroundImage}
        />
        <div className={styles.contactContainer}>
          <form className={styles.formContact} onSubmit={sendEmail}>
            <div className={styles.contactTitle}>
              <span>CONTATO</span>
            </div>
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
            <button className={styles.buttonContact} onClick={notify}>
              ENVIAR
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
