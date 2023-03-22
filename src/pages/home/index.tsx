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
          <h2>
            <ChartLineUp size={32} />
            Início
          </h2>
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
              {new Array(5).fill(true).map((_, i) => (
                <CardComment key={i} />
              ))}
            </CardGroup>
          </MyBooks>
          <TrendingBooks>
            <SectionTitle title="Livros populares" href="/explore" />
            <CardGroup>
              {new Array(10).fill(true).map((_, i) => (
                <BookCard key={i} />
              ))}
            </CardGroup>
          </TrendingBooks>
        </HomeWrapper>
      </HomeContent>
    </HomeContainer>
  );
}
