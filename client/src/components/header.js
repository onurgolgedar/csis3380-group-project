import "../css_files/header_style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import UserButton from "./user/userButton";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header({ isLoggedIn, handleLogInStatus }) {
  const [isLogInPopOpen, setIsLogInPopOpen] = useState(false);
  const [isSignUpPopOpen, setIsSignUpPopOpen] = useState(false);
  const [openLink, setOpenLink] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setOpenLink("home");
    } else if (path === "/about") {
      setOpenLink("about");
    } else if (path === "/arcade") {
      setOpenLink("arcade");
    } else if (path === "/wiki") {
      setOpenLink("wiki");
    }
  }, [location.pathname]);

  const handleLink = (name) => {
    setOpenLink(name);
  };

  const showPopSignUpModal = () => {
    setIsSignUpPopOpen(true);
  };

  const hidePopSignUpModal = () => {
    setIsSignUpPopOpen(false);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const showPopLogInModal = () => {
    setIsLogInPopOpen(true);
  };

  const hidePopLogInModal = () => {
    setIsLogInPopOpen(false);
    setPassword("");
    setEmail("");
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/users/register",  {
        username,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.message);
      });
      hidePopSignUpModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogInFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/users/login",  {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.message);
      });
      handleLogInStatus();
      hidePopLogInModal(); // should contain user data
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="header--wrapper">
      <header className="header--body">
        <ul className="header--nav">
          <li
            className={
              openLink === "home" ? "active--link header--list" : "header--list"
            }
          >
            <NavLink to="/" onClick={() => handleLink("home")}>
              <span className="header--icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="header--text">Home</span>
            </NavLink>
          </li>
          <li
            className={
              openLink === "arcade"
                ? "active--link header--list "
                : "header--list"
            }
          >
            <NavLink to="/arcade" onClick={() => handleLink("arcade")}>
              <span className="header--icon">
                <ion-icon name="game-controller-outline"></ion-icon>
              </span>
              <span className="header--text">Arcade</span>
            </NavLink>
          </li>
          <li
            className={
              openLink === "wiki"
                ? "active--link header--list "
                : "header--list"
            }
          >
            <NavLink to="/wiki" onClick={() => handleLink("wiki")}>
              <span className="header--icon">
                <ion-icon name="book-outline"></ion-icon>
              </span>
              <span className="header--text">Wiki</span>
            </NavLink>
          </li>
          <li
            className={
              openLink === "about"
                ? "active--link header--list "
                : "header--list"
            }
          >
            <NavLink to="/about" onClick={() => handleLink("about")}>
              <span className="header--icon">
                <ion-icon name="information-circle-outline"></ion-icon>
              </span>
              <span className="header--text">About</span>
            </NavLink>
          </li>
          <li className="header--list">
            <a href="#footer">
              <span className="header--icon">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <span className="header--text">Contacts</span>
            </a>
          </li>
        </ul>
        <ul className="header--navLogin">
          {isLoggedIn ? (
            <UserButton />
          ) : (
            <div
              style={{ display: "flex", gap: "10px" }}
              className="logButtons-Wrapper"
            >
              <button
                type="button"
                className="btnLogin"
                onClick={showPopSignUpModal}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btnLogin"
                onClick={showPopLogInModal}
              >
                Log In
              </button>
            </div>
          )}
        </ul>
      </header>

      <Modal id="myLogInModal" show={isLogInPopOpen} onHide={hidePopLogInModal}>
        <Modal.Header>
          <Modal.Title>Log In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formLogIn">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="btnCancel"
            onClick={hidePopLogInModal}
          >
            Cancel
          </Button>
          <Button onClick={handleLogInFormSubmit} variant="info" className="btnSave">
            Log In
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        id="mySignUpModal"
        show={isSignUpPopOpen}
        onHide={hidePopSignUpModal}
      >
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formSignUp">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter an email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="btnCancel"
            onClick={hidePopSignUpModal}
          >
            Cancel
          </Button>
          <Button onClick={handleSignUpFormSubmit} variant="info" className="btnSave">
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
