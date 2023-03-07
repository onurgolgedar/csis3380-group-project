import "../css_files/footer_style.css";

const Footer = () => {
    return (
      <div>
        <footer className="footer--body" id="footer">
          <ul className="footer--links">
            <li className="footer--team">
              <span className="footer--icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="footer-teammember">
                <a href="#">
                  <span className="footer--smallicon">
                    <ion-icon name="person-outline"></ion-icon>
                  </span>
                  <span className="footer--text"> Onur Gölgedar </span>
                </a>
                <a href="#">
                  <span className="footer--smallicon">
                    <ion-icon name="person-outline"></ion-icon>
                  </span>
                  <span className="footer--text"> Jerry Pena Alfaro </span>
                </a>
                <a href="#">
                  <span className="footer--smallicon">
                    <ion-icon name="person-outline"></ion-icon>
                  </span>
                  <span className="footer--text"> Lovepreet Singh </span>
                </a>
              </span>
            </li>
          </ul>
          <div className="footer--links2">
            <div className="footer--col">
              <h3>
                .our<span>Portfolio</span>
              </h3>
              <ul>
                <li>
                  <a href="#">Links</a>
                </li>
                <li>
                  <a href="#">Onur Gölgedar</a>
                </li>
                <li>
                  <a href="#">Jerry Pena Alfaro</a>
                </li>
                <li>
                  <a href="#">Lovepreet Singh</a>
                </li>
              </ul>
            </div>
            <div className="footer--col">
              <h3>
                .our<span>Github</span>
              </h3>
              <ul>
                <li>
                  <a href="#">Links</a>
                </li>
                <li>
                  <a href="#">Onur Gölgedar</a>
                </li>
                <li>
                  <a href="#">Jerry Pena Alfaro </a>
                </li>
                <li>
                  <a href="#">Lovepreet Singh</a>
                </li>
              </ul>
            </div>
            <div className="footer--col">
              <h3>
                .quick<span>Links</span>
              </h3>
              <ul>
                <li>
                  <a href="#sectionHome">Home</a>
                </li>
                <li>
                  <a href="#sectionService">Services</a>
                </li>
                <li>
                  <a href="#sectionAbout">About</a>
                </li>
                <li>
                  <a href="#footer">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="footer--col">
              <h3>
                .follow<span>Us</span>
              </h3>
              <ul>
                <li>
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;