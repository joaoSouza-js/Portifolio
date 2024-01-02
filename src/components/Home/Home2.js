import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myselfRounded.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
              Um pouco <span className="purple"> sobre </span> mim
            </h1>
            <p className="home-about-body">
              Meu nome é João Souza, sou desenvolvedor
              <strong className="purple">
                <i> front-end </i>
              </strong>
              Apaixonado por código há mais 3 anos

              <br />
              <br />Especialista em Javascript:
              <i>
                <strong className="purple"> React , React Native e Node</strong>
              </i>
              <br />
              <br />
              Meu foco principal está na criação de
              <strong className="purple" > aplicativos </strong> e
              <strong className="purple" > websites </strong> inovadores, combinando design intuitivo com tecnologias modernas. Tenho paixão por transformar ideias em interfaces elegantes e funcionais.

              <br />
              <br />
              Além disso, trabalho com
              <i>
                <strong className="purple"> Node.js </strong>
                e
                <strong className="purple"> Prisma </strong>
              </i>
              para construir

              <i>
                <strong className="purple" style={{ marginLeft: 2 }}>
                  APIs
                </strong>
              </i> robustas, garantindo uma integração eficiente entre o <i>front-end </i> e o   <i>back-end</i>.


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Onde me encontrar?</h1>
            <p>
              Você pode me encontrar nos seguintes <span className="purple">canais </span>
            </p>
            <ul className="home-about-social-links " >
              <li className="social-icons">
                <a
                  href="https://github.com/joaoSouza-js"
                  target="_blank"
                  rel="noreferrer"
                  title=" link do github de joão souza"

                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-souza-progamador/"
                  title=" link do linkedin de joão souza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  href="https://www.instagram.com/joao_souza_.js/"
                  title=" link do instagram de joão souza"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  href="https://wa.me/+5511980721233"
                  title=" link do whatsapp de joão souza"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
