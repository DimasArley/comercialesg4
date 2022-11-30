import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
import { isNull } from 'util';
import Cookies from "universal-cookie";
import app from "../../app.json";
import { calculateExtraccionSesion } from "../helper/helper";

const {APIHOST} = app;
const cookies = new Cookies();
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    axios.post(`${APIHOST}/usuarios/login` ,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) => {
      if (isNull(response.data.token)) {
        alert('Usuario y/o contraseña inválidos');        
      } else {
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calculateExtraccionSesion(),
        })        
      }
    })
    .catch((err) => {
      console.log(err);
    })
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
                    <Form.Label>USUARIO</Form.Label>
                    <Form.Control
                    onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>CONTRASEÑA</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="dark"
                      onClick={() => {
                        this.iniciarSesion();
                      }}
                    >
                      INICIAR SESION
                    </Button>
                    <Button variant="danger" href="#register">
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
