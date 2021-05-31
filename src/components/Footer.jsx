import React from "react";
import Github from "../images/github-icon.svg";
import "../stylesheets/Footer.scss";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/praaatik/mars-weather"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="footer__icon">
          <img src={Github} alt="Github Icon" />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
