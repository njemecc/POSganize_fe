import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 16.6rem;
  width: auto;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src="/images/logo-nobg.png" alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
