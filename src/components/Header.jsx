import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderName>
        <span>&#123; A &#125;</span> PORTFOLIO
      </HeaderName>
      <HeaderDropdown>
        <p>ABOUT</p>
        <p>PROJECTS</p>
      </HeaderDropdown>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
`;
const HeaderDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media only screen and (max-width: 45rem) {
    display: none;
  }
`;
const HeaderName = styled.h1`
  font-family: "Teko", sans-serif;
  font-weight: 700;
  color: #ff6600;
`;

export default Header;
