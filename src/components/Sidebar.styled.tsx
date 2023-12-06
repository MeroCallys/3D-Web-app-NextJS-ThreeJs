import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 15%;
  border: 1px dashed blue;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const NavLinksContainer = styled.nav`
  width: 100%;
  border: 1px dashed red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
`;

export const LinkGroup = styled.div<{ $isCollapse?: boolean }>`
  width: 100%;
  display: ${({ $isCollapse }) => ($isCollapse ? "flex" : "none")};
  align-items: start;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Button = styled.button`
  border: none;
  width: 100%;
`;

export const NavLinkSC = styled(NavLink)`
  text-decoration: none;
  color: #8f8fb1;
  font-size: 18px;
`;
export const NavTitles = styled(NavLinkSC)`
  font-size: 20px;
  color: #444444;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowLogo = styled.svg`
  height: 15px;
  /* background-image: url("data:image/svg+xml,background-image: url('data:image/svg+xml,%253Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%25231e293b'%253E%253Cpath fillRule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%253E%253C/svg%253E');"); */
`;
