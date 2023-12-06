import { useLoaderData } from "react-router-dom";
import {
  getProfiles,
  ProfilesProps,
} from "../../services/dashboard-profiles.api";
import { LinkSC } from "./Profiles.styled";

export const loader = () => {
  return getProfiles();
};

function Profiles() {
  const data = useLoaderData() as ProfilesProps[];
  console.log(data);
  return (
    <>
      <h1> Profiles!</h1>
      {data &&
        data.map((profile) => (
          <LinkSC to={`/dashboard/profiles/${profile.id}`}>
            <ul>
              <li>{profile.company}</li>
              <li>{profile.firstName}</li>
              <li>{profile.lastName}</li>
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
            </ul>
          </LinkSC>
        ))}
    </>
  );
}

export default Profiles;
