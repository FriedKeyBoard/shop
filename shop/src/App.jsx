import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import.meta.env.BASE_URL
import {ProductList, productData} from './product.data.jsx'
import CustomNavbar from './navbar.jsx'
import bg from './assets/image/main-bg.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  let [tumbler] = useState(productData);

  return (

      <div className="App">
          <CustomNavbar/>

          <div className="main-bg">
          </div>

          <Container>
              <Row style={{marginTop: "10px"}}>
                  <ProductList data={tumbler} />
                  {/*<Col>*/}
                  {/*  <img src="/image/product1.png" width="80%"/>*/}
                  {/*  <h4>{tumbler[0].title}</h4>*/}
                  {/*  <p>{tumbler[0].content}</p>*/}
                  {/*</Col>*/}
                  {/*<Col>*/}
                  {/*    <img src="/image/product2.png" width="80%"/>*/}
                  {/*    <h4>{tumbler[1].title}</h4>*/}
                  {/*    <p>{tumbler[1].content}</p>*/}
                  {/*</Col>*/}
                  {/*<Col>*/}
                  {/*    <img src="/image/product3.png" width="80%"/>*/}
                  {/*    <h4>{tumbler[2].title}</h4>*/}
                  {/*    <p>{tumbler[2].content}</p>*/}
                  {/*</Col>*/}
              </Row>
          </Container>

      </div>


  )
}

export default App
