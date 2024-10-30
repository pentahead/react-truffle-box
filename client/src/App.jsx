import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <EthProvider>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand href="#home">Truffle + React Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#intro">Intro</Nav.Link>
              <Nav.Link href="#setup">Setup</Nav.Link>
              <Nav.Link href="#demo">Demo</Nav.Link>
              <Nav.Link href="#footer">Footer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid id="App" className="bg-light text-dark d-flex flex-column min-vh-100">
        <Row className="justify-content-center align-items-center flex-grow-1">
          <Col md={8} className="text-center">
            <h1 className="my-4 text-primary">Welcome to the Truffle + React Box!</h1>
            <Intro />
            <hr className="my-4" />
            <Setup />
            <hr className="my-4" />
            <Demo />
            <hr className="my-4" />
            <Footer />
          </Col>
        </Row>
      </Container>
    </EthProvider>
  );
}

export default App;
