import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import projectImage01 from "../../Assets/Projects/projectPreview01.png"
import projectImage06 from "../../Assets/Projects/projectPreview06.png"
import projectImage02 from "../../Assets/Projects/projectPreview02.png"
import projectImage04 from "../../Assets/Projects/projectPreview04.png"
import projectImage05 from "../../Assets/Projects/projectPreview05.png"
import projectImage07 from "../../Assets/Projects/projectPreview07.png"

const ProjectsList = [
  {
    title: "chat",
    imgPath: projectImage01,
    description: "This project is an immersive journey into the creation of a real-time chat application, seamlessly connecting users for instant communication. The application is split into two major sides: the Front-End and the Back-End. Let's explore the key features and technologies driving this exciting endeavor.",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/chat-using-websockets"

  },
  {
    title: "CoinSynch",
    imgPath: projectImage02,
    description: "CoinSynch é uma aplicação web construída com Next.js que fornece um painel poderoso e amigável para traders de criptomoedas. Permite que os usuários monitorem dados de mercado em tempo real, rastreiem suas carteiras e acessem análises abrangentes para tomar decisões informadas nas negociações. A aplicação integra-se com APIs populares de criptomoedas para obter dados de mercado atualizados, garantindo precisão e informações em tempo real.",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/CoinSynch"

  },
 
  {
    title: "Find A Friend",
    imgPath: projectImage04,
    description: "um projeto desenvolvido para ajudar pessoas a encontrar o seu amigo de quatro patas! Este site tem como objetivo facilitar o processo de adoção de animais de estimação, permitindo que os usuários encontrem cães e gatos disponíveis para adoção em sua cidade/estado ou que atendam às suas preferências em termos de idade, energia, independência e tamanho",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/ignite-gci-"

  },
  {
    title: "IgniteCall",
    imgPath: projectImage05,
    description: "O projeto Ignite Call foi construído para agendamentos de compromissos a partir de um calendário com integração com o Google Agenda. O usuário pode se cadastrar no app a partir de sua conta do Google e indicar seus dias da semana e horários em que estará disponível para agendar compromissos. Todo agendamento cadastrado na aplicação tem integração com o Google Agenda, o qeu possibilita ao usuário verificar seus novos compromissos direto na plataforma do Google.",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/ignite-react-js_class-06-Ignite-Call"

  },
  {
    title: "chat-bot",
    imgPath: projectImage06,
    description: "um projeto desenvolvido para ajudar pessoas a encontrar o seu amigo de quatro patas! Este site tem como objetivo facilitar o processo de adoção de animais de estimação, permitindo que os usuários encontrem cães e gatos disponíveis para adoção em sua cidade/estado ou que atendam às suas preferências em termos de idade, energia, independência e tamanho",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/chat-bot"

  },
  {
    title: "E Commerce",
    imgPath: projectImage07,
    description: "Aplicativo de comércio eletrônico do início ao fim foi um desafio emocionante e gratificante. Ao longo do processo, tive a oportunidade de aprender e aplicar várias tecnologias e conceitos essenciais para criar uma experiência de compra excepcional.",
    isBlog: false,
    ghLink: "https://github.com/joaoSouza-js/ignite_class03_react-native"

  },
]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabalhos <strong className="purple">Recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Veja um pouco do que eu seu fazer
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            ProjectsList.map(project => (
              <Col key={project.title} md={4} className="project-card">
                <ProjectCard
                  
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  
                />
              </Col>
            ))
          }
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
