import axios from "axios";
import { ProfilesProps as ProfileProps } from "./dashboard-profiles.api";

export async function getProfileDetails(params: number) {
  const res = await axios.get<ProfileProps>(
    `http://localhost:3000/profiles/${params}`
  );
  const data = res.data;
  return data;
}
