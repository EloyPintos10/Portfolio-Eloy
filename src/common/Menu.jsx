import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../css/menu.css"
const Menu = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Navbar expand="lg" className="bg-navbar">
      <Container>
    
        <Navbar.Brand href="#Home" className='name_brand'>Eloy Pintos . <span className='name_span'>_</span></Navbar.Brand>
        <Nav className="m-auto">
            <Nav.Link href="#Home" className='link_nav me-4'>
                <div className='div_link'>
                    <p className='text_link'>01</p>
                    <span>// home</span>
                </div>
            </Nav.Link>
            <Nav.Link href="#section-work" className='link_nav me-4'>
            <div className='div_link'>
                    <p className='text_link'>02</p>
                    <span>// trabajos</span>
                </div>
                </Nav.Link>           
            <Nav.Link href="#section-practicas" className='link_nav me-4'>
            <div className='div_link'>
                    <p className='text_link'>03</p>
                    <span>// practicas</span>
                </div>
                </Nav.Link>           
            <Nav.Link href="#section-contacto" className='link_nav'>
            <div className='div_link'>
                    <p className='text_link'>04</p>
                    <span>// contacto</span>
                </div>
                </Nav.Link>           
          </Nav>       
      </Container>
    </Navbar>
    );
};

export default Menu;