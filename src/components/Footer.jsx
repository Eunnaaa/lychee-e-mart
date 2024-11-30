import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-5">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Lychee Mart. All Rights Reserved.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Tentang Kami
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Kebijakan Privasi
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Syarat dan Ketentuan
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
