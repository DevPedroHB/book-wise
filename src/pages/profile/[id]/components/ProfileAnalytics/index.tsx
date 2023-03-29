import { Avatar } from "@/components/Avatar";
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";
import {
  ProfileAnalyticsComponent,
  ProfileAnalyticsContent,
  ProfileAnalyticsDivisor,
  ProfileAnalyticsHeader,
  ProfileAnalyticsItem,
  ProfileAnalyticsWrapper,
} from "./styles";

export function ProfileAnalytics() {
  return (
    <ProfileAnalyticsComponent>
      <ProfileAnalyticsContent>
        <ProfileAnalyticsHeader>
          <Avatar
            avatarSize={72}
            imgUrl="https://github.com/DevPedroHB.png"
            altText="Avatar de DevPedroHB"
          />
          <div>
            <h3>Pedro Henrique</h3>
            <span>membro desde 2019</span>
          </div>
        </ProfileAnalyticsHeader>
        <ProfileAnalyticsDivisor />
        <ProfileAnalyticsWrapper>
          <ProfileAnalyticsItem>
            <BookOpen size={32} />
            <div>
              <h4>3853</h4>
              <span>Páginas lidas</span>
            </div>
          </ProfileAnalyticsItem>
          <ProfileAnalyticsItem>
            <Books size={32} />
            <div>
              <h4>10</h4>
              <span>Livros avaliados</span>
            </div>
          </ProfileAnalyticsItem>
          <ProfileAnalyticsItem>
            <UserList size={32} />
            <div>
              <h4>8</h4>
              <span>Autores lidos</span>
            </div>
          </ProfileAnalyticsItem>
          <ProfileAnalyticsItem>
            <BookmarkSimple size={32} />
            <div>
              <h4>Computação</h4>
              <span>Categoria mais lida</span>
            </div>
          </ProfileAnalyticsItem>
        </ProfileAnalyticsWrapper>
      </ProfileAnalyticsContent>
    </ProfileAnalyticsComponent>
  );
}
