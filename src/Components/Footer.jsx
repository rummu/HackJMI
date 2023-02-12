import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          {/* <p>This is footer section.</p> */}
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p className="copyright">copyright &copy;2022 </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
