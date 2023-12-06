import {
  ArrowLogo,
  Button,
  Header,
  LinkGroup,
  NavLinkSC,
  NavLinksContainer,
  NavTitles,
} from "./Sidebar.styled";
import Footer from "../components/Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Logo } from "../assets/images/arrow.svg";

function Sidebar() {
  const [isCollapse, setCollapse] = useState<boolean>(true);

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setCollapse(!isCollapse);
    console.log(event.target);
  };

  const svg = {
    xlmns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "#1e293b",
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
  };
  return (
    <Header>
      <NavLinksContainer>
        <NavLinkSC to="/">#Logo Here</NavLinkSC>
        <ul>
          <li>
            <NavTitles to=".">
              <span>#</span>
              <span>Dashboard</span>
              <ArrowLogo
                xmlns={svg.xlmns}
                viewBox={svg.viewBox}
                fill={svg.fill}
              >
                <path fillRule="evenodd" d={svg.d} />
              </ArrowLogo>
            </NavTitles>
            <div>
              <ul>
                <li>
                  <NavLinkSC to=".">Overview</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to=".">Whatever</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to=".">Whatever</NavLinkSC>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Customers</a>
            <div>
              <ul>
                <li>
                  <NavLinkSC to="profiles">Profiles</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="orders">Orders</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="ledgers">Ledger</NavLinkSC>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Inventory</a>
            <div>
              <ul>
                <li>
                  <NavLinkSC to="#">Suppliers</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="#">Products</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="#">Print logs</NavLinkSC>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Resources</a>
            <div>
              <ul>
                <li>
                  <NavLinkSC to="#">Terms of Service</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="#">Warranty</NavLinkSC>
                </li>
                <li>
                  <NavLinkSC to="#">Documents</NavLinkSC>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <Button onClick={clickHandler}>Dashboard</Button>
        <LinkGroup $isCollapse={isCollapse}></LinkGroup>
      </NavLinksContainer>
      <Footer />
    </Header>
  );
}

export default Sidebar;
