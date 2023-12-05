import {
  HeaderS,
  Container,
  LogoContainer,
  LogoWrapper,
  ToggeleSwitch,
  NavContainer,
  NavMenuLinks,
  LoginButton,
  ButtonWrapper,
  SignupButton,
  LogoLink,
  NavMenuWrapper,
} from "./Header.styled";
import { useState } from "react";

function Header() {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <HeaderS>
      <Container>
        <LogoContainer>
          <LogoWrapper>
            <LogoLink to="/">SolTech</LogoLink>
          </LogoWrapper>
          <ToggeleSwitch $isCollapsed={isCollapsed} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </ToggeleSwitch>
        </LogoContainer>
        <NavContainer $isCollapsed={isCollapsed}>
          <NavMenuWrapper>
            <NavMenuLinks to="/">Home</NavMenuLinks>
            <NavMenuLinks to="dashboard">Dashboard</NavMenuLinks>
          </NavMenuWrapper>
          <ButtonWrapper>
            <SignupButton to="signup">Signup</SignupButton>
            <LoginButton to="login">Login</LoginButton>
          </ButtonWrapper>
        </NavContainer>
      </Container>
    </HeaderS>
  );
}

export default Header;
