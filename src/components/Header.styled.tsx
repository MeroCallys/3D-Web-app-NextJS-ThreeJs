import styled from "styled-components";
import { device } from "../styles/BreakPoints";
import { NavLink } from "react-router-dom";

export const HeaderS = styled.header`
  position: absolute;
  z-index: 100;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.nav`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.black.main};
  display: flex;
  padding: 0 1.5rem !important;

  @media ${device.xs} {
    flex: 1 0 90%;
    flex-direction: column;
    border-radius: 1rem !important;
  }
  @media ${device.sm} {
    flex: 1 0 90%;
    flex-direction: column;
    border-radius: 1rem !important;
  }
  @media ${device.md} {
    flex: 1 0 90%;
    flex-direction: column;
    border-radius: 1rem !important;
  }
  @media ${device.lg} {
    min-width: 80%;
    border-radius: 2.1rem;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.xl} {
    min-width: 75%;
    border-radius: 2.1rem;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.xxl} {
    min-width: 75%;
    border-radius: 2.1rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.section`
  display: flex;
  padding: 0.75rem 0.5rem;
  align-items: center;
  @media ${device.xs} {
    padding: 0.75rem 0.5rem;
    width: 100%;
    justify-content: space-between;
  }
  @media ${device.sm} {
    padding: 0.75rem 0.5rem;
    width: 100%;
    justify-content: space-between;
  }
  @media ${device.md} {
    padding: 0.75rem 0.5rem;
    width: 100%;
    justify-content: space-between;
  }
  @media ${device.lg} {
    padding: 0.75rem 0.5rem;
    justify-content: space-between;
  }
  @media ${device.xl} {
    padding: 0.75rem 0.5rem;
    justify-content: space-between;
  }
  @media ${device.xxl} {
    padding: 0.75rem 0.5rem;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem 0 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.white.white8};
`;

export const LogoLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const ToggeleSwitch = styled.button<{ $isCollapsed: boolean }>`
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.black.main};
    background-color: ${({ theme }) => theme.colors.white.white8};
  }
  &:focus {
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.black.black8};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.white.white8};
  }

  @media ${device.xs} {
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
      margin: 0.15rem;
      width: 1.2rem;
      height: 0.1rem;
      border-radius: 2px;
      border: none;
      background-color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.sm} {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
      margin: 0.15rem;
      width: 1.2rem;
      height: 0.1rem;
      border-radius: 2px;
      border: none;
      background-color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.md} {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
      margin: 0.15rem;
      width: 1.2rem;
      height: 0.15rem;
      border-radius: 2px;
      border: none;
      background-color: ${({ theme }) => theme.colors.white.white1};
    }
  }
`;

export const NavContainer = styled.section<{ $isCollapsed: boolean }>`
  display: flex;
  width: 100%;
  @media ${device.xs} {
    margin-top: 1rem;
    flex-direction: column;
    width: 80%;
    display: ${(props) => (props.$isCollapsed ? "flex" : "none")};
  }
  @media ${device.sm} {
    margin-top: 1rem;
    flex-direction: column;
    width: 80%;
    display: ${(props) => (props.$isCollapsed ? "flex" : "none")};
  }
  @media ${device.md} {
    margin-top: 1rem;
    flex-direction: column;
    width: 80%;
    display: ${(props) => (props.$isCollapsed ? "flex" : "none")};
  }
  @media ${device.lg} {
    align-items: center;
    justify-content: space-between;
  }
  @media ${device.xl} {
    align-items: center;
    justify-content: space-between;
  }
  @media ${device.xxl} {
    align-items: center;
    justify-content: space-between;
  }
`;
export const NavMenuWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${device.xs} {
    width: 100%;
    align-items: start;
    flex-flow: column wrap;
  }
  @media ${device.sm} {
    width: 100%;
    align-items: start;
    flex-flow: column wrap;
  }
  @media ${device.md} {
    width: 100%;
    align-items: start;
    flex-flow: column wrap;
  }
  @media ${device.lg} {
    width: 100%;
    flex-direction: row;
    align-items: start;
  }
  @media ${device.xl} {
    width: 100%;
    flex-direction: row;
    align-items: start;
  }
  @media ${device.xxl} {
    width: 100%;
    flex-direction: row;
    align-items: start;
  }
`;
export const NavMenuLinks = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white.main};
  text-decoration: none;
  padding: 1rem 0.5rem;
  font-size: 0.8rem;
  @media ${device.xs} {
    width: 100%;
  }
  @media ${device.sm} {
    width: 100%;
  }
  @media ${device.md} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${device.xs} {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0.8rem;
  }
  @media ${device.sm} {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0.8rem;
  }
  @media ${device.md} {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0.8rem;
  }
  @media ${device.lg} {
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  @media ${device.xl} {
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  @media ${device.xxl} {
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const LoginButton = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.black.main};
  background-color: ${({ theme }) => theme.colors.white.main};

  &:hover {
    color: ${({ theme }) => theme.colors.white.main};
    background-color: ${({ theme }) => theme.colors.red.red5};
  }

  @media ${device.xs} {
    width: 100%;
  }
  @media ${device.sm} {
    width: 100%;
  }
  @media ${device.md} {
    width: 100%;
  }
  @media ${device.lg} {
    width: 100%;
    padding: 0.3rem 1.8rem;
  }
  @media ${device.xl} {
    width: 100%;
    padding: 0.4rem 1.9rem;
  }
  @media ${device.xxl} {
    width: 100%;
    padding: 1rem 2rem;
  }
`;
export const SignupButton = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;

  @media ${device.xs} {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.white.white2};
    background-color: ${({ theme }) => theme.colors.white.white10};
    /*  */
  }
  @media ${device.sm} {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.black.main};
    background-color: ${({ theme }) => theme.colors.white.white5};

    &:hover {
      color: ${({ theme }) => theme.colors.black.main};
      background-color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.md} {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.white.main};
    background-color: ${({ theme }) => theme.colors.white.white5};

    &:hover {
      color: ${({ theme }) => theme.colors.black.main};
      background-color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.lg} {
    width: 100%;
    padding: 0.3rem 0.8rem;
    color: ${({ theme }) => theme.colors.white.white4};

    &:hover {
      color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.xl} {
    width: 100%;
    padding: 0.4rem 1.9rem;
    color: ${({ theme }) => theme.colors.white.white4};

    &:hover {
      color: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media ${device.xxl} {
    width: 100%;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.white.white4};

    &:hover {
      color: ${({ theme }) => theme.colors.white.main};
    }
  }
`;
