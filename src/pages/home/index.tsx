import { BookCard } from "@/components/BookCard";
import { CardComment } from "@/components/CardComment";
import { PageTitle } from "@/components/PageTitle";
import { SectionTitle } from "@/components/SectionTitle";
import { isAuthenticated, Sidebar } from "@/components/Sidebar";
import { ChartLineUp } from "phosphor-react";
import { LastReadCard } from "./components/LastReadCard";
import {
  CardGroup,
  HomeContainer,
  HomeContent,
  HomeWrapper,
  MyBooks,
  TrendingBooks,
} from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <HomeContent>
        <PageTitle>
          <ChartLineUp size={32} />
          Início
        </PageTitle>
        <HomeWrapper>
          <MyBooks>
            {isAuthenticated && (
              <>
                <SectionTitle title="Sua última leitura" href="/profile" />
                <CardGroup yourLastRead>
                  <LastReadCard />
                </CardGroup>
              </>
            )}
            <SectionTitle title="Avaliações mais recentes" />
            <CardGroup>
              <CardComment />
              <CardComment />
              <CardComment />
              <CardComment />
              <CardComment />
            </CardGroup>
          </MyBooks>
          <TrendingBooks>
            <SectionTitle title="Livros populares" href="/explore" />
            <CardGroup>
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </CardGroup>
          </TrendingBooks>
        </HomeWrapper>
      </HomeContent>
    </HomeContainer>
  );
}
