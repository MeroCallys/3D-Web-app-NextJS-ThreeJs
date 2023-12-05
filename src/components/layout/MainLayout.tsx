import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
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
