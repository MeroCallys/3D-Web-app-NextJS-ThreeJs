import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import styled from "styled-components";

const Main = styled.main`
  border: 1px solid red;
  width: 100%;
  height: 80vh;
`;

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
