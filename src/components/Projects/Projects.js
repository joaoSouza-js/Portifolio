import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import projectImage01 from "../../Assets/Projects/projectPreview01.png";
import projectImage06 from "../../Assets/Projects/projectPreview06.png";
import projectImage02 from "../../Assets/Projects/projectPreview02.png";
import projectImage04 from "../../Assets/Projects/projectPreview04.png";
import projectImage05 from "../../Assets/Projects/projectPreview05.png";
import projectImage07 from "../../Assets/Projects/projectPreview07.png";
import projectImage08 from "../../Assets/Projects/projectPreview08.png";
import projectImage09 from "../../Assets/Projects/projectPreview09.png";
import projectImage10 from "../../Assets/Projects/projectPreview10.png";

const ProjectsList = [
    {
        title: "Web player spotify",
        imgPath: projectImage08,
        description:
        "Web Music Player é uma aplicação web que replica a interface e funcionalidades do Spotify. Utiliza Supabase no backend para gerenciar o banco de dados e armazenar arquivos de áudio, garantindo uma infraestrutura segura e escalável. Web Workers otimizam o streaming de áudio em chunks, melhorando a eficiência da reprodução. No front-end, as principais tecnologias incluem Next.js, TailwindCSS e Axios. O player oferece funções como reproduzir, pausar, avançar, retroceder faixas, e controlar o volume, com foco em desempenho.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/web-music-player-spotify",
    },
    {
        title: "E Commerce",
        imgPath: projectImage07,
        description:
            "Aplicativo de comércio eletrônico do início ao fim foi um desafio emocionante e gratificante. Ao longo do processo, tive a oportunidade de aprender e aplicar várias tecnologias e conceitos essenciais para criar uma experiência de compra excepcional.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/ignite_class03_react-native",
    },

    {
        title: "Chat",
        imgPath: projectImage01,
        description:
            "This project is an immersive journey into the creation of a real-time chat application, seamlessly connecting users for instant communication. The application is split into two major sides: the Front-End and the Back-End. Let's explore the key features and technologies driving this exciting endeavor.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/chat-using-websockets",
    },
    {
        title: "CoinSynch",
        imgPath: projectImage02,
        description:
            "CoinSynch é uma aplicação web construída com Next.js que fornece um painel poderoso e amigável para traders de criptomoedas. Permite que os usuários monitorem dados de mercado em tempo real, rastreiem suas carteiras e acessem análises abrangentes para tomar decisões informadas nas negociações. A aplicação integra-se com APIs populares de criptomoedas para obter dados de mercado atualizados, garantindo precisão e informações em tempo real.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/CoinSynch",
    },

    {
        title: "Find A Friend",
        imgPath: projectImage04,
        description:
            "um projeto desenvolvido para ajudar pessoas a encontrar o seu amigo de quatro patas! Este site tem como objetivo facilitar o processo de adoção de animais de estimação, permitindo que os usuários encontrem cães e gatos disponíveis para adoção em sua cidade/estado ou que atendam às suas preferências em termos de idade, energia, independência e tamanho",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/ignite-gci-",
    },

    {
        title: "Airbnb Clone",
        imgPath: projectImage09,
        description:
        "Airbnb Clone é uma aplicação que replica a interface e funcionalidades do Airbnb, como integração com mapas e calendário. Utiliza FlashList no front-end para melhorar a renderização de listas e FlatList para criar um carrossel com transições suaves. A busca é integrada à API do Google Places, atualizando resultados conforme a pesquisa do usuário. O calendário permite selecionar datas, e o modal de hóspedes ajusta o número de pessoas. O React Native Maps exibe locais e seus detalhes, e o BottomSheet mostra uma lista de lugares próximos com animações suaves.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/airbnb-clone",
    },
    {
        title: "IgniteCall",
        imgPath: projectImage05,
        description:
            "O projeto Ignite Call foi construído para agendamentos de compromissos a partir de um calendário com integração com o Google Agenda. O usuário pode se cadastrar no app a partir de sua conta do Google e indicar seus dias da semana e horários em que estará disponível para agendar compromissos. Todo agendamento cadastrado na aplicação tem integração com o Google Agenda, o qeu possibilita ao usuário verificar seus novos compromissos direto na plataforma do Google.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/ignite-react-js_class-06-Ignite-Call",
    },
    {
        title: "Chat-bot",
        imgPath: projectImage06,
        description:
            "um projeto desenvolvido para ajudar pessoas a encontrar o seu amigo de quatro patas! Este site tem como objetivo facilitar o processo de adoção de animais de estimação, permitindo que os usuários encontrem cães e gatos disponíveis para adoção em sua cidade/estado ou que atendam às suas preferências em termos de idade, energia, independência e tamanho",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/chat-bot",
    },
    {
        title: "E Commerce",
        imgPath: projectImage07,
        description:
            "Aplicativo de comércio eletrônico do início ao fim foi um desafio emocionante e gratificante. Ao longo do processo, tive a oportunidade de aprender e aplicar várias tecnologias e conceitos essenciais para criar uma experiência de compra excepcional.",
        isBlog: false,
        ghLink: "https://github.com/joaoSouza-js/ignite_class03_react-native",
    },
    {
      title: "App de adivinhar com IA",
      imgPath: projectImage10,
      description:
      "Um aplicativo móvel que utiliza inteligência artificial para analisar e fazer suposições sobre imagens capturadas ou enviadas pelos usuários. Com uma interface intuitiva e alimentado pelo TensorFlow, o aplicativo oferece uma experiência divertida ao adivinhar o conteúdo de fotos. Os usuários podem tirar fotos ou selecionar imagens da galeria, e a IA analisa e faz uma previsão sobre o que está na imagem. Atualmente, suporta apenas imagens no formato JPEG, mas há planos de adicionar suporte para outros formatos e implementar novos recursos, como pontuação de confiança para as previsões.",
      isBlog: false,
      ghLink: "https://github.com/joaoSouza-js/guesting-app-with-ia",
  },
    
];

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    {ProjectsList.map((project) => (
                        <Col
                            key={project.title}
                            md={4}
                            className="project-card"
                        >
                            <ProjectCard
                                imgPath={project.imgPath}
                                isBlog={false}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
