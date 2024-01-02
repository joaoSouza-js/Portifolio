import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Criado por João Souza(JS)</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/joaoSouza-js"
                title=" link do github de joão souza"
                style={{ color: "white" }}
                target="_blank"
                rel="author"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-souza-progamador/"
                title=" link do linkedin de joão souza"
                style={{ color: "white" }}
                target="_blank"
                rel="author"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://www.instagram.com/joao_souza_.js/"
                title=" link do instagram de joão souza"

                rel="author"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://wa.me/+5511980721233"
                title=" link do whatsapp de joão souza"
                rel="author"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
