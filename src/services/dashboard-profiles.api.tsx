import axios from "axios";

export type ProfilesProps = {
  id: number;
  category: string;
  company: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  province_code: string;
  country: string;
  phone: string;
  email: string;
};

export async function getProfiles() {
  const res = await axios.get<ProfilesProps[]>(
    "http://localhost:3000/profiles"
  );
  const data = res.data;

  return data;
}
