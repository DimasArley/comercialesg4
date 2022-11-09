import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container id="login-conatiner" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2>INICIO DE SESIÓN</h2>
            </Row>
            <Row>
              <Col
              sm = "12"
              xs = "12"
              md = {{span: 4, offset: 4}}
              lg = {{span: 4, offset: 4}}
              xl = {{span: 4, offset: 4}}
              >
                <Form>
                  <Form.Group>
                    <Form.Label style={{ float: "left", marginTop: 20 }}>
                      CORREO ELECTRONICO
                    </Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ float: "left" }}>
                      CONTRASEÑA
                    </Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="dark"
                      type="submit"
                      style={{ marginTop: 20, width: "100%" }}
                    >
                      INICIAR SESION
                    </Button>

                    <Button variant="danger" type="submit">
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
