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
      <SocialLinks />
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
`;

const PagesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
export default App;
