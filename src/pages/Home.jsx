import React from 'react';
import "../css/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../common/Menu';
import Works from "../pages/Works"
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
    return (   
        <>   
        <Menu></Menu>
        <div className='div_total' id='Home'>
        <div className='div_contain'>           
        </div>    
            <div className='title'>
                <p>Eloy Pintos </p>
            </div>
            <div className='subtitle'>
                <p>DESARROLLADOR FRONT-END || REACT JS - REACT NATIVE</p>
            </div>
            <div className='icon-flecha'>
              <a href="#section-work" className='icon-a'><BsArrowDown /></a>  
            </div>
        </div>
        </> 
        
    
    );
};

export default Home;