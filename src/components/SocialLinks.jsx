import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import styled from "styled-components";

function SocialLinks() {
  return (
    <LinksContainer>
      <a
        href="https://www.linkedin.com/in/ashwin-baskaran-75b90519a/"
        target="_blank"
      >
        <LinkedInLogoIcon height={28} width={28} />
      </a>
      <a href="https://github.com/AshwinB98" target="_blank">
        <GitHubLogoIcon height={28} width={28} />
      </a>
      <a href="">
        <DownloadIcon height={28} width={28} />
      </a>
    </LinksContainer>
  );
}

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

export default SocialLinks;
