import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import "../css/contacto.css"

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_533klbt', 'template_5791ork', form.current, {
        publicKey: '-GX5UHwn7TZrNOH2Y',
      })
      .then(
        () => {
          Swal.fire({           
            icon: "success",
            title: "Mensaje enviado!",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo enviar tu mensaje!",
           
          });
        },
      );}

    return (
        <div id='section-contacto'>
         
             <Form className='formulario' ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="user_name" required />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mensaje</Form.Label>    
        <textarea  className='input-text'  name="message" required placeholder='Dejame tu mensaje'></textarea>
      </Form.Group>  
      <div className='text-center mt-4'>
      <Button className='btn btn-contacto' type="submit" value="Send">
    Enviar
      </Button>
        </div>   
    </Form>
        </div>
    );
};

export default Contacto;