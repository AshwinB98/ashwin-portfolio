import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Header />
      <SocialLinks />
      <PagesWrapper>
        <Wrapper>
          <Intro />
        </Wrapper>
        <Wrapper>
          <AboutMe />
        </Wrapper>
        <Wrapper>
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
