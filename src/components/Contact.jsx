import React from "react";
import "../App.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaInstagram size={30} />,
      title: "Instagram",
      link: "https://instagram.com/yourusername",
    },
    {
      icon: <FaWhatsapp size={30} />,
      title: "WhatsApp",
      link: "https://wa.me/1234567890",
    },
    {
      icon: <FaPhone size={30} />,
      title: "Contact Person",
      link: "tel:+1234567890",
    },
    {
      icon: <FaFacebook size={30} />,
      title: "Facebook",
      link: "https://facebook.com/yourusername",
    },
    {
      icon: <FaTwitter size={30} />,
      title: "Twitter",
      link: "https://twitter.com/yourusername",
    },
  ];

  return (
    <div className="contact-section">
      <div className="col-2 mb-5">
        <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
        <hr />
      </div>
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">{contact.icon}</div>
          <h3>{contact.title}</h3>
        </a>
      ))}
    </div>
  );
}

export default Contact;
