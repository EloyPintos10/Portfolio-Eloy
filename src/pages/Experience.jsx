import React from 'react';
import { trabajosData } from '../data/trabajos';
import Cart from '../components/Cart';
import "../css/experience.css"
import { Container, Row } from 'react-bootstrap';

const Experience = () => { 

    const datos = trabajosData
  
    return (
        <div id='section-experience'>
            <Container>
        <Row>          
            {datos.map((item)=>(
                <Cart item={item} key={item.id}></Cart>
            ))}
         
            
            
            </Row>

            </Container>
        </div>
    );
};

export default Experience;