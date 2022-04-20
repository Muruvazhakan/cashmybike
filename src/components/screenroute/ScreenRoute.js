import React from 'react';
import Home from "../screens/Home/Home";
import Nav from 'react-bootstrap/Nav'
import Navbar from './Navbar';
import { Routes, Route, Link,MemoryRouter } from "react-router-dom";
import BikeHome from '../screens/BikeHome/BikeHome';
import Footer from '../screens/Footer/Footer';

const ScreenRoute = (props) =>{
    return(
        <>    
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bikes" element={<BikeHome />} />
      </Routes>
      <Footer/>
        {/* <Home/> */}
       
        {/* <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> */}
        </>
    )
}
export default ScreenRoute;