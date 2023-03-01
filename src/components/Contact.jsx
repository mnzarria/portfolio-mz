import React from "react";
import estilo from "../styles/contact.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {BsLinkedin, BsGithub, BsEnvelopeFill} from "react-icons/bs"

const Contact = () => {
  return (
    <div className={estilo.container}>
      <div className={estilo.contactForm}>
        <Form>
          <Form.Label className={estilo.title}>
          /* ENVIAR UN MENSAJE */
          </Form.Label>
          <Form.Group>
            <Form.Label className={estilo.label}>.nombre {"{"}</Form.Label>
            <Form.Control
              className={estilo.control}
              type="nombre"
              // placeholder="ingrese nombre"
            />
            <Form.Label className={estilo.label}>{"}"}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className={estilo.label}>.email {"{"}</Form.Label>
            <Form.Control
              className={estilo.control}
              type="email"
              // placeholder="ingrese email"
            />
            <Form.Label className={estilo.label}>{"}"}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className={estilo.label}>.telefono {"{"}</Form.Label>
            <Form.Control
              className={estilo.control}
              type="telefono"
              // placeholder="ingrese teléfono"
            />
            <Form.Label className={estilo.label}>{"}"}</Form.Label>
          </Form.Group>
          <Form.Label className={estilo.label}>.mensaje {"{"}</Form.Label>
          <InputGroup>
            <Form.Control
              className={estilo.mensaje}
              as="textarea"
              aria-label="With textarea"
              // placeholder="ingrese mensaje"
            />
          </InputGroup>
          <Form.Label className={estilo.label}>{"}"}</Form.Label><br/>
          <Button type="submit">Enviar mensaje</Button>
        </Form>
        
      </div>
      <div className={estilo.contactRedes}>
        <p className={estilo.title}>/* REDES */</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/mnzarria/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"><BsLinkedin className={estilo.icon} />{" "}/mnzarria</a></li>
          <li><a className="bi bi-github" href="https://github.com/mnzarria" target="_blank" rel="noopener noreferrer"><BsGithub className={estilo.icon} />{" "}/mnzarria </a></li>
          <li><a className="bi bi-envelope-fill" href="mailto:mnzarria@gmail.com" target="_blank" rel="noopener noreferrer"><BsEnvelopeFill className={estilo.icon} />{" "} mnzarria@gmail.com </a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
