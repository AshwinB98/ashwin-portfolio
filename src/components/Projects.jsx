import styled from "styled-components";
import portThumb from "../assets/port_thumb.png";
import quizThumb from "../assets/quiz_thumb.png";
import tailoredThumb from "../assets/tailored_thumb.png";
import { TitleTypography } from "./AboutMe";
import { ContactMeButton } from "./Intro";

function Projects() {
  const projectList = [
    {
      img: quizThumb,
      title: "Quiz App",
      description: "A simple quiz application",
      githubLink: "https://github.com/AshwinB98/quiz-app",
    },
    {
      img: tailoredThumb,
      title: "Tailored App",
      description: "Digital outlet for clothing",
      githubLink: "https://gitlab.com/ashwin.softdev/tailored-by-ashwin",
    },
    {
      img: portThumb,
      title: "Portfolio",
      description: "Personal Portfolio",
      githubLink: "https://github.com/AshwinB98/ashwin-portfolio",
    },
  ];
  return (
    <ProjectsContainer>
      <TitleTypography>PROJECTS</TitleTypography>
      <CardsContainer>
        {projectList.map((project, idx) => (
          <CardContainer key={idx}>
            <CardImage src={project.img} alt="project_img" />
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <a
              style={{ margin: "1rem" }}
              href={project.githubLink}
              target="_blank"
            >
              <ContactMeButton style={{ marginTop: 0, width: "100%" }}>
                View Code
              </ContactMeButton>
            </a>
          </CardContainer>
        ))}
      </CardsContainer>
      <ContactContainer>
        <TitleTypography style={{ fontSize: "2rem" }}>
          CONTACT ME
        </TitleTypography>
        <div>
          <h4>CALL</h4>
          <p>+91 8056 936474</p>
        </div>
        <div>
          <h4>EMAIL</h4>
          <p>ashwin.softdev@gmail.com</p>
        </div>
        <div>
          <h4>LOCATION</h4>
          <p>India</p>
        </div>
      </ContactContainer>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  margin-top: 1.25rem;
  min-width: 18.75rem;
  @media only screen and (max-width: 45rem) {
    min-width: 100%;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: scroll;
  padding-bottom: 1rem;
  @media only screen and (max-width: 45rem) {
    gap: 2rem;
    padding: 1rem 1rem 1rem 0.5rem;
  }
`;

const CardImage = styled.img`
  padding: 0.5rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  padding: 10px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  padding: 10px;
`;

const ContactContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 45rem) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    padding-bottom: 3rem;
  }
`;

export default Projects;
