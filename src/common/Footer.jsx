import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsFilePersonFill } from "react-icons/bs";
import cv from "../assets/CV.pdf"
import perfil from "../assets/fotoPerfil.jpg"
import Badge from 'react-bootstrap/Badge';


const Footer = () => {
  return (
    <div className="footer-color">
      <div className="div-title-footer">
        <p className="title-footer">
          Disponible para oportunidades independientes seleccionadas
        </p>
        <p className="subtitle-footer">
          ¿Tiene un proyecto interesante con el que necesita ayuda? <br />
          ¡Envíame un correo electrónico o contáctame por mensaje instantáneo!
        </p>

        <a href={cv} target="_blank" rel="noopener noreferrer" className="btnCv">Descargar CV</a>
      </div>
      <div className="contain-perfil">
        <div>
            <img src={perfil} alt="Perfil" className="foto-perfil"/>
        </div>
        <div className="iconos_footer">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=+3816422575&text=Hola%20Eloy!"
            className="divIcono"
          >
            <BsWhatsapp className="iconoMsj" />
          </a>
        </div>
        <div>
          <a
            href="http://www.linkedin.com/in/eloy-pintos-82017722a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="iconoLk" />
          </a>
        </div>
        <div>
          <a
            href={cv}  target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
           <BsFilePersonFill className="iconoCv" />
           <Badge bg="light" className="badge-cv">CV</Badge>
          </a>
        </div>
      </div>
      </div>     
     
    </div>
  );
};

export default Footer;
