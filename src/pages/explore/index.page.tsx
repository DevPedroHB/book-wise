import { InputSearch } from "@/components/InputSearch";
import { PageTitle } from "@/components/PageTitle";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Binoculars } from "phosphor-react";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app.page";
import { Books } from "./components/Books";
import { Categories } from "./components/Categories";
import { ExploreSearch } from "./styles";

const Explore: NextPageWithLayout = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <PageTitle>
        <h2>
          <Binoculars size={32} />
          Explorar
        </h2>
        <ExploreSearch>
          <InputSearch
            type="search"
            placeholder="Buscar livro ou autor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </ExploreSearch>
      </PageTitle>
      <Categories setSelectedCategory={setSelectedCategory} />
      <Books search={search} selectedCategory={selectedCategory} />
    </>
  );
};

Explore.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>;
};

export default Explore;
