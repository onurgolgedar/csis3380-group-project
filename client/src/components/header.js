import "../css_files/header_style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import {NavLink} from 'react-router-dom';

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
            <NavLink to="/">
              <span className="header--icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="header--text">Home</span>
            </NavLink>
          </li>
          <li className="header--list">
            <NavLink to="/service">
              <span className="header--icon">
                <ion-icon name="construct-outline"></ion-icon>
              </span>
              <span className="header--text">Services</span>
            </NavLink>
          </li>
          <li className="header--list">
            <NavLink to="/about">
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
          <button
          type="button"
          className="btnLogin"
          onClick={showPopModal}>Login
          </button>
        </ul>
      </header>


      <Modal show={isPopOpen} onHide={hidePopModal}>
        <Modal.Header>
          <Modal.Title>Login Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter a username" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="btnCancel" onClick={hidePopModal}>
            Cancel
          </Button>
          <Button variant="info" className="btnSave">Save Username</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;

