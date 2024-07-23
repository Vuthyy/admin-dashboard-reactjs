import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright <strong>. All Rights Reserved</strong>
      </div>
      <div className="credits">
        Designed again by
        <a href="https://www.facebook.com/" target="_blank">
          {" "}
          Vuthyy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
