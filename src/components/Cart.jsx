import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/experience.css"
import { FaLink } from "react-icons/fa6";
import { Col } from 'react-bootstrap';

const Cart = ({item}) => {

    return (
      <Col lg={3} sm={1}>
        <Card className='contain-card'>
          <div className='d-flex justify-content-center'>
        <Card.Img  src={item.imagen} className='img-cart' />      

          </div>
        <Card.Body>
          <Card.Title className='text-center'>{item.title}</Card.Title> 
               <p className='escondido'>{item.description}</p>
          <a variant="primary" href={item.url} target="_blank" className='cart-a'>Ver Aquí! <span><FaLink className='icon-work' /></span></a>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default Cart;