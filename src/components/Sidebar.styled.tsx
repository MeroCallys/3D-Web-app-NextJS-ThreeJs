import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 15%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: unset;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: antiquewhite;
    border-radius: 2rem;
  }
`;

export const Title = styled(Link)`
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #3a3838;
  text-decoration: none;
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.5rem;
`;

export const DashboardDivider = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  width: 100%;
`;

export const CollapsibleDashboard = styled.div<{
  $isCollapseDashboard?: boolean;
}>`
  display: ${({ $isCollapseDashboard }) =>
    $isCollapseDashboard ? "flex" : "none"};
  width: 100%;
`;

export const CollapsibleCustomer = styled.div<{
  $isCollapseCustomer?: boolean;
}>`
  display: ${({ $isCollapseCustomer }) =>
    $isCollapseCustomer ? "flex" : "none"};
  width: 100%;
`;
export const CollapsibleInventory = styled.div<{
  $isCollapseInventory?: boolean;
}>`
  display: ${({ $isCollapseInventory }) =>
    $isCollapseInventory ? "flex" : "none"};
  width: 100%;
`;
export const CollapsibleResources = styled.div<{
  $isCollapseResources?: boolean;
}>`
  display: ${({ $isCollapseResources }) =>
    $isCollapseResources ? "flex" : "none"};
  width: 100%;
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;
`;

export const Subtitle = styled(NavLink)`
  text-decoration: none;
  color: #6d6d88;
  font-size: 1rem;

  &:hover {
    color: #3b2b16;
  }
`;

export const ListWrapper = styled.li`
  padding: 0 3rem;
`;

/////////////////////////////////////////////////////////////
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
export const NavTitle = styled(Link)`
  font-size: 20px;
  color: #444444;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
