import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { isAuthenticated, Sidebar } from "@/components/Sidebar";
import { useRouter } from "next/router";
import { CaretLeft, User } from "phosphor-react";
import { ProfileAnalytics } from "./components/ProfileAnalytics";
import { ProfileDayList } from "./components/ProfileDayList";
import {
  ProfileContainer,
  ProfileContent,
  ProfileList,
  ProfileWrapper,
} from "./styles";

export default function Profile() {
  const router = useRouter();

  return (
    <ProfileContainer>
      <Sidebar />
      <ProfileWrapper>
        <ProfileContent>
          <PageTitle>
            {isAuthenticated ? (
              <h2>
                <User size={32} />
                Perfil
              </h2>
            ) : (
              <button onClick={() => router.back()}>
                <CaretLeft size={20} />
                Voltar
              </button>
            )}
          </PageTitle>
          <Input type="search" placeholder="Buscar livro avaliado" />
          <ProfileList>
            {new Array(3).fill(true).map((_, i) => (
              <ProfileDayList />
            ))}
          </ProfileList>
        </ProfileContent>
        <ProfileAnalytics />
      </ProfileWrapper>
    </ProfileContainer>
  );
}
