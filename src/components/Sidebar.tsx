import * as Styled from "./Sidebar.styled";
import Footer from "./Footer";
import { MdSpaceDashboard, MdInventory } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { RiProfileFill } from "react-icons/ri";
import { TbCarSuv } from "react-icons/tb";
import { useState } from "react";

export default function Sidebar() {
  const [isCollapseDashboard, setCollapseDashboard] = useState<boolean>(true);
  const [isCollapseCustomer, setCollapseCustomer] = useState<boolean>(true);
  const [isCollapseInventory, setCollapseInventory] = useState<boolean>(true);
  const [isCollapseResources, setCollapseResources] = useState<boolean>(true);
  // const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
  const clickHandler = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === "dashboard")
      setCollapseDashboard(!isCollapseDashboard);
    else if (event.currentTarget.id === "customer")
      setCollapseCustomer(!isCollapseCustomer);
    else if (event.currentTarget.id === "inventory")
      setCollapseInventory(!isCollapseInventory);
    else if (event.currentTarget.id === "resources")
      setCollapseResources(!isCollapseResources);
    console.log(event.currentTarget.id);
  };

  return (
    <Styled.Header>
      <Styled.Navigation>
        <Styled.LogoContainer>
          <Styled.Title to="/">
            <h1>
              LogoHere
              <span>
                <TbCarSuv />
              </span>
            </h1>
          </Styled.Title>
        </Styled.LogoContainer>
        <Styled.Ul>
          <Styled.ListItem>
            <Styled.DashboardContainer onClick={clickHandler} id="dashboard">
              <Styled.Title to=".">
                <Styled.DashboardDivider>
                  <MdSpaceDashboard />
                  Dashboard
                </Styled.DashboardDivider>
                <Styled.DashboardDivider>
                  {isCollapseDashboard ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </Styled.DashboardDivider>
              </Styled.Title>
            </Styled.DashboardContainer>
            <Styled.CollapsibleDashboard
              $isCollapseDashboard={isCollapseDashboard}
            >
              <Styled.ListContainer>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Overview</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Whatever</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Whatever</Styled.Subtitle>
                </Styled.ListWrapper>
              </Styled.ListContainer>
            </Styled.CollapsibleDashboard>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.DashboardContainer onClick={clickHandler} id="customer">
              <Styled.Title to=".">
                <Styled.DashboardDivider>
                  <RiProfileFill />
                  Customer
                </Styled.DashboardDivider>
                <Styled.DashboardDivider>
                  {isCollapseCustomer ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </Styled.DashboardDivider>
              </Styled.Title>
            </Styled.DashboardContainer>
            <Styled.CollapsibleCustomer
              $isCollapseCustomer={isCollapseCustomer}
            >
              <Styled.ListContainer>
                <Styled.ListWrapper>
                  <Styled.Subtitle to="profiles">Profiles</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Orders</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Ledger</Styled.Subtitle>
                </Styled.ListWrapper>
              </Styled.ListContainer>
            </Styled.CollapsibleCustomer>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.DashboardContainer onClick={clickHandler} id="inventory">
              <Styled.Title to=".">
                <Styled.DashboardDivider>
                  <MdInventory />
                  Inventory
                </Styled.DashboardDivider>
                <Styled.DashboardDivider>
                  {isCollapseInventory ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </Styled.DashboardDivider>
              </Styled.Title>
            </Styled.DashboardContainer>
            <Styled.CollapsibleInventory
              $isCollapseInventory={isCollapseInventory}
            >
              <Styled.ListContainer>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Suppliers</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Products</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Print Logs</Styled.Subtitle>
                </Styled.ListWrapper>
              </Styled.ListContainer>
            </Styled.CollapsibleInventory>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.DashboardContainer onClick={clickHandler} id="resources">
              <Styled.Title to=".">
                <Styled.DashboardDivider>
                  <IoDocuments />
                  Resources
                </Styled.DashboardDivider>
                <Styled.DashboardDivider>
                  {isCollapseResources ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </Styled.DashboardDivider>
              </Styled.Title>
            </Styled.DashboardContainer>
            <Styled.CollapsibleResources
              $isCollapseResources={isCollapseResources}
            >
              <Styled.ListContainer>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Terms of Service</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Warranty</Styled.Subtitle>
                </Styled.ListWrapper>
                <Styled.ListWrapper>
                  <Styled.Subtitle to=".">Documents</Styled.Subtitle>
                </Styled.ListWrapper>
              </Styled.ListContainer>
            </Styled.CollapsibleResources>
          </Styled.ListItem>
        </Styled.Ul>

        <Styled.LinkGroup></Styled.LinkGroup>
      </Styled.Navigation>
      <Footer />
    </Styled.Header>
  );
}
