import "../css_files/header_style.css";

function Header() {
    return (
      <div>
        <header className="header--body">
          <ul className="header--nav">
            <li className="header--list">
              <a href="#sectionHome">
                <span className="header--icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="header--text">Home</span>
              </a>
            </li>
            <li class="header--list">
              <a href="#sectionService">
                <span className="header--icon">
                  <ion-icon name="construct-outline"></ion-icon>
                </span>
                <span className="header--text">Services</span>
              </a>
            </li>
            <li class="header--list">
              <a href="#sectionAbout">
                <span className="header--icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span className="header--text">About</span>
              </a>
            </li>
            <li class="header--list">
              <a href="#footer">
                <span className="header--icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <span className="header--text">Contacts</span>
              </a>
            </li>
            <li class="header--list">
            <a href="#">
              <span className="header--icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              <span className="header--text">Login</span>
            </a>
          </li>
          </ul>
        </header>
      </div>
    );
  }

export default Header