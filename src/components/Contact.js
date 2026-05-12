import React, { Fragment } from "react";
import emailjs from "@emailjs/browser";
import { ReactComponent as Linkedin } from "../imgs/svgs/linkedin.svg";
import { ReactComponent as Youtube } from "../imgs/svgs/youtube.svg";
import { ReactComponent as Github } from "../imgs/svgs/github.svg";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>My Contacts ...</h2>

      <Form />
      <hr />
      <div className="socialmedia">
        <a href="https://linkedin.com/in/mohamed-alkfrawy" target="_blank">
          <Linkedin />
        </a>
        <a
          href="https://www.youtube.com/channel/UCyocFFbZNX67jxpzc6e50dQ"
          target="_blank"
        >
          <Youtube />
        </a>

        <a href="https://github.com/Mohamed-Alkfrawy" target="_blank">
          <Github />
        </a>
      </div>
    </div>
  );
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_st6xlp5",
      "template_citt3z6",
      e.target,
      "DAnv780_uDtkwAkKP"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input type="text" name="user_name" placeholder="Name :" required />
      <input type="email" name="email_from" placeholder="Email :" required />
      <textarea name="message" placeholder="Message :" required />
      <button type="submit">Contact Me</button>
    </form>
  );
}

export default Contact;
