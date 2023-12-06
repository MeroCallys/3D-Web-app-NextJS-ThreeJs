import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Main = styled.main`
  border: 1px solid red;
  width: 100%;
  height: 80vh;
`;

function MainLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default MainLayout;
