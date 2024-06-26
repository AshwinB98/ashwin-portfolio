import styled from "styled-components";
import CssLogo from "../assets/css.svg?react";
import ExpressLogo from "../assets/express.svg?react";
import HtmlLogo from "../assets/html.svg?react";
import JavascriptLogo from "../assets/javascript.svg?react";
import MySQLLogo from "../assets/mysql.svg?react";
import NodejsLogo from "../assets/nodejs.svg?react";
import ReactLogo from "../assets/react.svg?react";
import ReduxLogo from "../assets/redux.svg?react";
import TailwindLogo from "../assets/tailwind.svg?react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { HeaderName } from "./Header";
function AboutMe() {
  const timeLineDesc = ["eat", "sleep", "repeat"];
  return (
    <>
      <TitleTypography>ABOUT ME</TitleTypography>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        Greetings, fellow web enthusiasts! I&apos;m Ashwin, a software developer
        who thrives on building beautiful and functional web experiences. Over
        the past 3 years, I&apos;ve leveled up my skills in ReactJS and
        discovered a deep love for creating reusable components with visually
        beautiful UI/UX. When I&apos;m not coding, you&apos;ll probably find me
        playing Souls-like games.
      </p>
      <div style={{ marginTop: "1rem" }}>
        <h2>JOURNEY SO FAR</h2>
        <Timeline position="alternate" direction="horizontal">
          {timeLineDesc.map((desc, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot color="warning" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{desc}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <h2>TECHNOLOGIES</h2>
        <LogoContainer>
          <HtmlLogo height={"4rem"} width={"4rem"} />
          <CssLogo height={"4rem"} width={"4rem"} />
          <JavascriptLogo height={"4rem"} width={"4rem"} />
          <TailwindLogo height={"4rem"} width={"4rem"} />
          <ReactLogo height={"4rem"} width={"4rem"} />
          <ReduxLogo height={"4rem"} width={"4rem"} />
          <NodejsLogo height={"4rem"} width={"4rem"} />
          <ExpressLogo height={"4rem"} width={"4rem"} />
          <MySQLLogo height={"4rem"} width={"4rem"} />
        </LogoContainer>
      </div>
    </>
  );
}

export const TitleTypography = styled(HeaderName)`
  font-size: 3rem;
  padding: 0rem 0.5rem;
  border-left: 8px solid #ff6600;
  border-bottom: 8px solid #ff6600;
  display: inline-block;
  color: black;
`;

const LogoContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 1rem;
  gap: 4.2rem;
  width: 100%;
`;

export default AboutMe;
