import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_x8k2abc",        // SERVICE ID
      "template_contact01",     // TEMPLATE ID
      {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      },
      "vR8k2xyzABC"              // PUBLIC KEY
    )
    .then(() => {
      alert("Message sent successfully");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Want to collaborate or just say hello? Reach out below!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="4" required />
        <button type="submit" className="btn primary">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
