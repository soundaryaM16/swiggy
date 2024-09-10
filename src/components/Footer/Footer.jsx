import React from "react";
import "./Footer.css"; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Registered Office Address:</h5>
          <ul>
            <li>Flipkart Internet Private Limited,</li>

            <li>Clove Embassy Tech Village, </li>
            <li>Outer Ring Road, Devarabeesanahalli Village, </li>
            <li>Bengaluru, 560103,</li>

            <li>
              Telephone: <a href="tel:044-45614700">044-45614700</a>/{" "}
              <a href="tel:044-67415800">044-67415800</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
