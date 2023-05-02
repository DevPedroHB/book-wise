import { InputSearch } from "@/components/InputSearch";
import { PageTitle } from "@/components/PageTitle";
import { Sidebar } from "@/components/Sidebar";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CaretLeft, User } from "phosphor-react";
import { useState } from "react";
import { ProfileAnalytics } from "./components/ProfileAnalytics";
import { IProfileRating, ProfileDayList } from "./components/ProfileDayList";
import {
  ProfileContainer,
  ProfileContent,
  ProfileList,
  ProfileWrapper,
} from "./styles";

export interface IProfileData {
  ratings: IProfileRating[];
  user: {
    avatar_url: string;
    name: string;
    member_since: string;
  };
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
}

export default function Profile() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const userId = router.query.id as string;
  const { data: session } = useSession();

  const { data: profile } = useQuery<IProfileData>(
    ["profile", userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`);

      return data?.profile ?? {};
    },
    {
      enabled: !!userId,
    }
  );

  const filteredRatings = profile?.ratings.filter((rating) => {
    return (
      rating.book.name.toLowerCase().includes(search.toLowerCase()) ||
      rating.book.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <ProfileContainer>
        <Sidebar />
        <ProfileWrapper>
          <ProfileContent>
            <PageTitle>
              {session ? (
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
            <InputSearch
              type="search"
              placeholder="Buscar livro avaliado"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ProfileList>
              {filteredRatings?.map((rating) => (
                <ProfileDayList key={rating.id} rating={rating} />
              ))}
              {filteredRatings?.length === 0 && (
                <h3>
                  {search
                    ? "Nenhum resultado encontrado"
                    : "Nenhuma avaliação encontrada"}
                </h3>
              )}
            </ProfileList>
          </ProfileContent>
          {profile && <ProfileAnalytics profile={profile} />}
        </ProfileWrapper>
      </ProfileContainer>
    </>
  );
}
