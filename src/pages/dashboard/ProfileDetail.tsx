import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { ProfilesProps as ProfileProps } from "../../services/dashboard-profiles.api";
import { getProfileDetails } from "../../services/dashboard-profile-details.api";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  border: 1px dashed blue;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  border: 1px dashed orangered;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = styled.nav`
  width: 100%;
  border: 1px dashed gold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const NavLinkSC = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 0;
  color: #91836d;
  font-weight: bold;
`;

export type LoaderParams = {
  params: { id: number };
};

export const loader = ({ params }: LoaderParams) => {
  const id = params.id;
  return getProfileDetails(id);
};

function ProfileDetail() {
  const profile = useLoaderData() as ProfileProps;
  console.log(profile);

  return (
    <Container>
      <Link to=".." relative="path">
        &#x2190; Back to the Profiles
      </Link>
      <Nav>
        <NavLinkSC to=".">Details</NavLinkSC>
        <NavLinkSC to="pricing">Pricing</NavLinkSC>
        <NavLinkSC to="orders">Order History</NavLinkSC>
      </Nav>
      <Section>
        <Outlet />
      </Section>
    </Container>
  );
}

export default ProfileDetail;
