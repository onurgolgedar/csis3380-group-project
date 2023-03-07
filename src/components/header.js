import "../css_files/header_style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

function Header() {
  const [isPopOpen, setIsPopOpen] = useState(false);

  const showPopModal = () => {
    setIsPopOpen(true);
  };

  const hidePopModal = () => {
    setIsPopOpen(false);
  };
  return (
    <div className="header--wrapper">
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
          <li className="header--list">
            <a href="#sectionService">
              <span className="header--icon">
                <ion-icon name="construct-outline"></ion-icon>
              </span>
              <span className="header--text">Services</span>
            </a>
          </li>
          <li className="header--list">
            <a href="#sectionAbout">
              <span className="header--icon">
                <ion-icon name="information-circle-outline"></ion-icon>
              </span>
              <span className="header--text">About</span>
            </a>
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
        <button
          type="button"
          className="btn btn-warning btn-log"
          onClick={showPopModal}
        >
          Log In
        </button>
      </header>


      <Modal show={isPopOpen} onHide={hidePopModal}>
        <Modal.Header>
          <Modal.Title>Login Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hidePopModal}>
            Cancel
          </Button>
          <Button variant="info">Save Username</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
