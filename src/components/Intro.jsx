import styled from "styled-components";
import { HeaderName } from "./Header";

function Intro({ onClickAbout }) {
  return (
    <IntroContainer>
      <div style={{ padding: "1.4rem" }}>
        <IntroTypography>Hello There!</IntroTypography>
        <HeaderName style={{ fontSize: "6rem" }}>
          <span style={{ color: "black", fontSize: "4rem" }}>I&apos;M</span>{" "}
          ASHWIN
        </HeaderName>
        <ProfessionTypography>Software Developer</ProfessionTypography>
        <DescTypography>Expertise in Web Technologies</DescTypography>
        <ContactMeButton onClick={onClickAbout}>Learn More</ContactMeButton>
      </div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;
const IntroTypography = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
`;
const ProfessionTypography = styled.h2`
  font-weight: 300;
  font-size: 3rem;
`;

const DescTypography = styled.h4`
  font-weight: 200;
  font-size: x-large;
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
