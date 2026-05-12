import { ReactComponent as Linkedin } from "../imgs/svgs/linkedin.svg";
import { ReactComponent as Youtube } from "../imgs/svgs/youtube.svg";
import { ReactComponent as Github } from "../imgs/svgs/github.svg";
import { useState } from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageContent = `
    name: ${name}.
    email: ${email}.
    message: ${message}.`;

    const config = {
      phone: 201149080720, // International format
      apikey: 6960877,
      message: messageContent,
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.callmebot.com/whatsapp.php?phone=${
      config.phone
    }&text=${encodeURIComponent(config.message)}&apikey=${config.apikey}`;

    try {
      const response = await fetch(proxy + url);

      if (response.ok) {
        setSent(true);
      } else {
        setSent(false);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        disabled={sent}
        style={{ opacity: sent ? 0.5 : 1 }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="user_name"
        placeholder="Name :"
        required
      />
      <input
        disabled={sent}
        style={{ opacity: sent ? 0.5 : 1 }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email_from"
        placeholder="Email :"
        required
      />
      <textarea
        disabled={sent}
        style={{ opacity: sent ? 0.5 : 1 }}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message :"
        required
      />
      <button disabled={sent} style={{ opacity: sent ? 0.5 : 1 }} type="submit">
        {sent ? "sent " : "Contact Me"}
      </button>
    </form>
  );
}

export default Contact;
