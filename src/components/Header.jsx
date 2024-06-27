import styled from "styled-components";
import SocialLinks from "./SocialLinks";

function Header({ onClickAbout, onClickProject }) {
  return (
    <HeaderContainer>
      <HeaderName>
        <span>&#123; A &#125;</span> PORTFOLIO
      </HeaderName>
      <HeaderDropdown>
        <Links onClick={onClickAbout}>ABOUT</Links>
        <Links onClick={onClickProject}>PROJECTS</Links>
      </HeaderDropdown>
      <MobileSocialContainer>
        <SocialLinks color={"#ff6600"} />
      </MobileSocialContainer>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background-image: linear-gradient(
    to top,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  /* @media only screen and (max-width: 45rem) {
    justify-content: center;
  } */
`;

const MobileSocialContainer = styled.div`
  display: none;
  @media only screen and (max-width: 45rem) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const Links = styled.p`
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #ff6600;
    padding-bottom: 1px;
  }
`;
const HeaderDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media only screen and (max-width: 45rem) {
    display: none;
  }
`;
export const HeaderName = styled.h1`
  font-family: "Teko", sans-serif;
  font-weight: 700;
  color: #ff6600;
`;

export default Header;
