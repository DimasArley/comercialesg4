import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    alert(`usuario: ${this.state.usuario} - password: ${this.state.pass} `);
  }

  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>INICIO DE SESIÓN</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>
                      CORREO ELECTRONICO
                    </Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      CONTRASEÑA
                    </Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="dark"
                      type="submit"                      
                      onClick={() => {
                        this.iniciarSesion();
                      }}
                    >
                      INICIAR SESION
                    </Button>

                    <Button
                      variant="danger"
                      href="https://google.com"
                    >
                      REGÍSTRATE
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
