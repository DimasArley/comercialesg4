import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" align="left" className="mx-5">
            COMERCIALES
            <br />
            G4
            <span id="usuario-sub-brand"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="BUSCA TU PRODUCTO"
                className="mx-2"
                aria-label="Search"
              />
              <Button variant="danger">
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav className="mx-auto">
              {/* <Nav.Link href="#login">INICIAR SESIÓN</Nav.Link> */}           
            </Nav>
            <DropdownButton
                id="dropdown-basic-button"
                title="USUARIO"
                variant="light"
                className="mx-2"
              >
                <Dropdown.Header id="dropdown-header">
                  <Row>
                  <FontAwesomeIcon icon={faUser} />
                  </Row>
                  <Row>
                    #Usuario#
                  </Row>                
                </Dropdown.Header>
                <Dropdown.Divider/>
                <Dropdown.Item href="#Logout">Cerrar sesión</Dropdown.Item>
              </DropdownButton>
              <Button href="#Cart" variant="light">
                {" "}
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
