import { PageTitle } from "@/components/PageTitle";
import { Sidebar } from "@/components/Sidebar";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import { Books } from "./components/Books";
import { Categories } from "./components/Categories";
import { ExploreContainer, ExploreContent, ExploreFormSearch } from "./styles";

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
          <ExploreFormSearch>
            <input type="search" placeholder="Buscar livro ou autor" />
            <button>
              <MagnifyingGlass size={20} />
            </button>
          </ExploreFormSearch>
        </PageTitle>
        <Categories />
        <Books />
      </ExploreContent>
    </ExploreContainer>
  );
}
