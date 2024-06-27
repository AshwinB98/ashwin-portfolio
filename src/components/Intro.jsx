import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../assets/coderAnime.json";
import { HeaderName } from "./Header";

function Intro({ onClickAbout }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <IntroContainer>
      <IntroContentContainer>
        <IntroTypography>Hello There!</IntroTypography>
        <NameTypography>
          <NameIntro>I&apos;M</NameIntro> ASHWIN
        </NameTypography>
        <ProfessionTypography>Software Developer</ProfessionTypography>
        <DescTypography>Expertise in Web Technologies</DescTypography>
        <ContactMeButton onClick={onClickAbout}>Learn More</ContactMeButton>
      </IntroContentContainer>
      <IntroAnimationContainer>
        <Lottie id="lottie-icon" options={defaultOptions} />
      </IntroAnimationContainer>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  @media only screen and (max-width: 45rem) {
    flex-direction: column;
  }
`;

const IntroContentContainer = styled.div`
  padding: 1.4rem;
  @media only screen and (max-width: 45rem) {
    order: 2;
  }
`;

const IntroAnimationContainer = styled.div`
  @media only screen and (max-width: 45rem) {
    padding-top: 1.8rem;
  }
`;
const IntroTypography = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  @media only screen and (max-width: 45rem) {
    font-size: 3rem;
  }
`;
const ProfessionTypography = styled.h2`
  font-weight: 300;
  font-size: 3rem;
  @media only screen and (max-width: 45rem) {
    font-size: 1.8rem;
  }
`;

const DescTypography = styled.h4`
  font-weight: 200;
  font-size: x-large;
  @media only screen and (max-width: 45rem) {
    font-size: 1.2rem;
  }
`;

const NameTypography = styled(HeaderName)`
  font-size: 6rem;
  @media only screen and (max-width: 45rem) {
    font-size: 4rem;
  }
`;

const NameIntro = styled.span`
  font-size: 4rem;
  color: black;
  @media only screen and (max-width: 45rem) {
    font-size: 3.2rem;
  }
`;
export const ContactMeButton = styled.button`
  margin-top: 3.2rem;
  background-color: #ff6600;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 0;
  color: white;
  cursor: pointer;
`;

export default Intro;
