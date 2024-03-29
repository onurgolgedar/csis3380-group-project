import "../css_files/footer_style.css";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer--body" id="footer">
        <ul className="footer--links">
          <li className="footer--team">
            <span className="footer--icon">
              <ion-icon name="people-outline"></ion-icon>
              Team Members
            </span>
            <br />
            <span className="footer-teammember">
              {/* <a href="/#"> */}
              <span className="footer--smallicon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="footer--text"> Onur Gölgedar </span>
              {/* </a> */}
              {/* <a href="/#"> */}
              <span className="footer--smallicon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="footer--text"> Jerry P. </span>
              {/* </a> */}
              {/* <a href="/#"> */}
              <span className="footer--smallicon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="footer--text"> Lovepreet Singh </span>
              {/* </a> */}
            </span>
          </li>
        </ul>
        <div className="footer--links2">
          <div className="footer--col">
            <h3>
              .our<span>Github</span>
            </h3>
            <ul>
              <li>
                <a href="https://github.com/onurgolgedar">Onur Gölgedar</a>
              </li>
              <li>
                <a href="https://github.com/Pandre19">Jerry P.</a>
              </li>
              <li>
                <a href="https://github.com/luhvpreet">Lovepreet Singh</a>
              </li>
            </ul>
          </div>
          <div className="footer--col">
            <h3>
              .quick<span>Links</span>
            </h3>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/arcade">Arcade</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
