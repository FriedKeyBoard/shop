import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import.meta.env.BASE_URL
import bg from './assets/image/main-bg.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="App">
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Brand href="#home">Shopping Center</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Cart</Nav.Link>
                          {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                          {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                          {/*    <NavDropdown.Item href="#action/3.2">*/}
                          {/*        Another action*/}
                          {/*    </NavDropdown.Item>*/}
                          {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                          {/*    <NavDropdown.Divider />*/}
                          {/*    <NavDropdown.Item href="#action/3.4">*/}
                          {/*        Separated link*/}
                          {/*    </NavDropdown.Item>*/}
                          {/*</NavDropdown>*/}
                      </Nav>
                      <Nav className="ms-auto">
                          <Nav.Link href="#login">Login</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

          <div className="main-bg">
          </div>

          <Container>
              <Row style={{marginTop: "10px"}}>
                  <Col>
                    <img src="/image/product4.jpg" width="80%"/>
                    <h4>상품명</h4>
                    <p>상품설명</p>
                  </Col>
                  <Col>
                      <img src="/image/product4.jpg" width="80%"/>
                      <h4>상품명</h4>
                      <p>상품설명</p>
                  </Col>
                  <Col>
                      <img src="/image/product4.jpg" width="80%"/>
                      <h4>상품명</h4>
                      <p>상품설명</p>
                  </Col>
              </Row>
          </Container>

      </div>


  )
}

export default App
