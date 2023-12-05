import { Link, useLoaderData } from "react-router-dom";
import { ProfilesProps as ProfileProps } from "../../../services/dashboard-profiles.api";
import { getProfileDetails } from "../../../services/dashboard-profile-details.api";

type LoaderParams = {
  params: number;
};

export const loader = async ({ params }: { params: { id: number } }) => {
  return getProfileDetails(params.id);
};

function ProfileDetail() {
  const details = useLoaderData() as ProfileProps;
  console.log(details);
  return (
    <div>
      <Link to="..">&#x2190; Back to the Profiles</Link>
      <h2>{}</h2>
    </div>
  );
}

export default ProfileDetail;
