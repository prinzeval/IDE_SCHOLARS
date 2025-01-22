import React from 'react';
import './contact.css';
import whatsappIcon from '../../assets/icons8-whatsapp-48.png'; // Adjust the path to your WhatsApp icon

const Contact = () => {
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello, I would like to get in touch with you!"; // Pre-filled message

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;
          const mailtoLink = `mailto:idescholars@gmail.com?subject=Contact%20from%20${encodeURIComponent(
            name
          )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
          window.location.href = mailtoLink;
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="whatsapp-contact">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
