import { BookCard, IBookWithAvgRating } from "@/components/BookCard";
import {
  CardComment,
  IRatingWithAuthorAndBook,
} from "@/components/CardComment";
import { PageTitle } from "@/components/PageTitle";
import { SectionTitle } from "@/components/SectionTitle";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ChartLineUp } from "phosphor-react";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app.page";
import { LastReadCard } from "./components/LastReadCard";
import { CardGroup, HomeWrapper, MyBooks, TrendingBooks } from "./styles";

const Home: NextPageWithLayout = () => {
  const { data } = useSession();

  const { data: ratings } = useQuery<IRatingWithAuthorAndBook[]>(
    ["latest-ratings"],
    async () => {
      const { data } = await api.get("/ratings/latest");

      return data?.ratings ?? [];
    }
  );

  const { data: popularBooks } = useQuery<IBookWithAvgRating[]>(
    ["popular-books"],
    async () => {
      const { data } = await api.get("/books/popular");

      return data?.books ?? [];
    }
  );

  const { data: latestUserRating } = useQuery<IRatingWithAuthorAndBook>(
    ["latest-user-rating", data?.user.id],
    async () => {
      const { data } = await api.get("/ratings/user-latest");

      return data?.rating ?? null;
    },
    {
      enabled: !!data?.user.id,
    }
  );

  return (
    <>
      <PageTitle>
        <h2>
          <ChartLineUp size={32} />
          Início
        </h2>
      </PageTitle>
      <HomeWrapper>
        <MyBooks>
          {latestUserRating && (
            <>
              <SectionTitle
                title="Sua última leitura"
                href={`/profile/${data?.user.id}`}
              />
              <CardGroup yourLastRead>
                <LastReadCard rating={latestUserRating} />
              </CardGroup>
            </>
          )}
          <SectionTitle title="Avaliações mais recentes" />
          <CardGroup>
            {ratings?.map((rating) => (
              <CardComment key={rating.id} rating={rating} />
            ))}
          </CardGroup>
        </MyBooks>
        <TrendingBooks>
          <SectionTitle title="Livros populares" href="/explore" />
          <CardGroup>
            {popularBooks?.map((book) => (
              <BookCard key={book.id} variant="type-1" book={book} />
            ))}
          </CardGroup>
        </TrendingBooks>
      </HomeWrapper>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
