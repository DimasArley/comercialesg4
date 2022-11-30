//import logo from './logo.svg';
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./components/router/router";
import Menu from "./components/navbar/navbar"


function App() {
  return (
    <div className="App">
      <Menu/>
      <Container>
        <AppRoutes/>
      </Container>
    </div>
  );
}

export default App;
