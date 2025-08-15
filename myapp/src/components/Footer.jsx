import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.svg" alt="Graphy Logo" />
            <span>Graphy</span>
          </div>
          <p>
            TheLearniverse empowers learners to bridge the gap between education and industry by offering expertly designed programs,
            hands-on projects, and mentorship. Our mission is to equip students and professionals with in-demand skills, helping them secure high-quality internships and jobs. Through practical learning, career guidance, and industry exposure,
            we make the journey from classroom to career smoother, faster, and more impactful.
          </p>
          <div className="footer-social">
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Right section */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <p>© 2025 TheLearniverse. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
