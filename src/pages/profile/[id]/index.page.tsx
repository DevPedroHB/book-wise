import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { Sidebar } from "@/components/Sidebar";
import { User } from "phosphor-react";
import { ProfileAnalytics } from "../components/ProfileAnalytics";
import { ProfileContainer, ProfileContent, ProfileWrapper } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <Sidebar />
      <ProfileWrapper>
        <ProfileContent>
          <PageTitle>
            <h2>
              <User size={32} />
              Perfil
            </h2>
          </PageTitle>
          <Input type="search" placeholder="Buscar livro avaliado" />
        </ProfileContent>
        <ProfileAnalytics />
      </ProfileWrapper>
    </ProfileContainer>
  );
}
