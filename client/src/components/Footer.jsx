import { Container, Row, Col } from 'react-bootstrap';

function Link({ uri, text }) {
  return (
    <Col className="text-center">
      <a href={uri} target="_blank" rel="noreferrer" className="text-decoration-none text-light">
        {text}
      </a>
    </Col>
  );
}

function Footer() {
  return (
    <footer id="footer" className="my-4 bg-dark text-light">
      <h2 className="text-warning text-center">Sumber daya lebih lanjut</h2>
      <Container fluid>
        <Row>
          <Link uri={"https://trufflesuite.com"} text={"Truffle"} />
          <Link uri={"https://reactjs.org"} text={"React"} />
          <Link uri={"https://soliditylang.org"} text={"Solidity"} />
          <Link uri={"https://ethereum.org"} text={"Ethereum"} />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
