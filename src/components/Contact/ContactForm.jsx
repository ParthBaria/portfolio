import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
  return (
    <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Want to collaborate or just say hello? Reach out below!</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="btn primary">
            Send
          </button>
        </form>
      </section>
  )
}

export default ContactForm