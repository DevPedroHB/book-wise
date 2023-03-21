import { Sidebar } from "@/components/Sidebar";
import { ProfileContainer, ProfileContent } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <Sidebar />
      <ProfileContent>
        <h1>Profile</h1>
      </ProfileContent>
    </ProfileContainer>
  );
}
