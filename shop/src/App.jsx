import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import.meta.env.BASE_URL
import {ProductList, productData, ProductDetail} from './product.data.jsx'
import CustomNavbar from './navbar.jsx'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from "axios";
import About  from './about/about.jsx';
import Event  from './pages/event.jsx';
import bg from './assets/image/main-bg.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  let [tumbler, setTumbler] = useState(productData);
  let navigate = useNavigate();

  return (

      <div className="App">

          <CustomNavbar/>

          <Routes>
              <Route path={"/"} element={
                  <div>
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
                      <button onClick={() => {
                        axios.get('https://codingapple1.github.io/shop/data2.json')
                        .then((result)=>{
                            console.log(result.data);
                            setTumbler(prev => ([...prev, ...result.data]));
                        })
                        .catch(()=>{
                            console.log('요청 실패')
                        })
                      }}>button</button>
                  </div>
              } />
              <Route path={"/detail/:id"} element={<ProductDetail tumbler={tumbler}/>} />
              {/*<Route path={"*"} element={<ERROR/>} />*/}
              {/*<Route path={"/about"} element={<About/>}>*/}
              {/*    <Route path={"member"} element={<div>멤버정보</div>} />*/}
              {/*    <Route path={"location"} element={<div>위치정보</div>} />*/}
              {/*</Route>*/}
              {/*<Route path={"/event"} element={<Event/>}>*/}
              {/*    <Route path={"one"} element={<div>첫 주문시 양배추즙 서비스</div>} />*/}
              {/*    <Route path={"two"} element={<div>생일기념 쿠폰받기</div>} />*/}
              {/*</Route>*/}
          </Routes>

      </div>


  )
}

export default App
