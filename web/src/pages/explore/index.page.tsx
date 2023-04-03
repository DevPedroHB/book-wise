import { InputSearch } from "@/components/InputSearch";
import { PageTitle } from "@/components/PageTitle";
import { Sidebar } from "@/components/Sidebar";
import { Binoculars } from "phosphor-react";
import { Books } from "./components/Books";
import { Categories } from "./components/Categories";
import { ExploreContainer, ExploreContent, ExploreSearch } from "./styles";

export default function Explore() {
  return (
    <ExploreContainer>
      <Sidebar />
      <ExploreContent>
        <PageTitle>
          <h2>
            <Binoculars size={32} />
            Explorar
          </h2>
          <ExploreSearch>
            <InputSearch type="search" placeholder="Buscar livro ou autor" />
          </ExploreSearch>
        </PageTitle>
        <Categories />
        <Books />
      </ExploreContent>
    </ExploreContainer>
  );
}
