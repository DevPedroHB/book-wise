import { Avatar } from "@/components/Avatar";
import dayjs from "@/lib/dayjs";
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";
import { IProfileData } from "../../index.page";
import {
  ProfileAnalyticsComponent,
  ProfileAnalyticsContent,
  ProfileAnalyticsDivisor,
  ProfileAnalyticsHeader,
  ProfileAnalyticsItem,
  ProfileAnalyticsWrapper,
} from "./styles";

interface IProfileAnalytics {
  profile: IProfileData;
}

export function ProfileAnalytics({ profile }: IProfileAnalytics) {
  const memberSince = dayjs(profile.user.member_since).year();

  return (
    <ProfileAnalyticsComponent>
      <ProfileAnalyticsContent>
        <ProfileAnalyticsHeader>
          <Avatar
            avatarSize={72}
            imgUrl={profile.user.avatar_url}
            altText={`Avatar de ${profile.user.name}`}
          />
          <div>
            <h3>{profile.user.name}</h3>
            <span>membro desde {memberSince}</span>
          </div>
        </ProfileAnalyticsHeader>
        <ProfileAnalyticsDivisor />
        <ProfileAnalyticsWrapper>
          <ProfileAnalyticsItem>
            <BookOpen size={32} />
            <div>
              <h4>{profile.readPages}</h4>
              <span>Páginas lidas</span>
            </div>
          </ProfileAnalyticsItem>
          <ProfileAnalyticsItem>
            <Books size={32} />
            <div>
              <h4>{profile.ratedBooks}</h4>
              <span>Livros avaliados</span>
            </div>
          </ProfileAnalyticsItem>
          <ProfileAnalyticsItem>
            <UserList size={32} />
            <div>
              <h4>{profile.readAuthors}</h4>
              <span>Autores lidos</span>
            </div>
          </ProfileAnalyticsItem>
          {profile.mostReadCategory && (
            <ProfileAnalyticsItem>
              <BookmarkSimple size={32} />
              <div>
                <h4>{profile.mostReadCategory}</h4>
                <span>Categoria mais lida</span>
              </div>
            </ProfileAnalyticsItem>
          )}
        </ProfileAnalyticsWrapper>
      </ProfileAnalyticsContent>
    </ProfileAnalyticsComponent>
  );
}
