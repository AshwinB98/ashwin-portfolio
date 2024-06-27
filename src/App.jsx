import { useRef } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  const aboutRef = useRef();
  const projectRef = useRef();
  const onClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onClickAbout={() => onClick(aboutRef)}
        onClickProject={() => onClick(projectRef)}
      />
      <SocialContainer>
        <LinksContainer>
          <SocialLinks color={"white"} />
        </LinksContainer>
      </SocialContainer>
      <PagesWrapper>
        <Wrapper>
          <Intro onClickAbout={() => onClick(aboutRef)} />
        </Wrapper>
        <Wrapper ref={aboutRef}>
          <AboutMe />
        </Wrapper>
        <Wrapper ref={projectRef}>
          <Projects />
        </Wrapper>
      </PagesWrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 7rem;
  scroll-behavior: smooth;
  scroll-snap-align: start;
  @media only screen and (max-width: 45rem) {
    padding: 4rem 2rem 0rem 2rem;
    height: fit-content;
    scroll-behavior: none;
    scroll-snap-align: none;
  }
`;

const PagesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const SocialContainer = styled.div`
  @media only screen and (max-width: 45rem) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  background-color: #ff6600;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: fixed;
  margin-top: 15.8rem;
  left: 0;
  border-top-right-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
`;

export default App;
