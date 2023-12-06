import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  display: flex;
`;

const Container = styled.section`
  border: 1px solid red;
  width: 85%;
  height: auto;
`;
const Title = styled.h2``;
function DashboardLayout() {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <Title>Welcome to Dashboard</Title>
          <Outlet />
        </Container>
      </MainContainer>
    </>
  );
}

export default DashboardLayout;
