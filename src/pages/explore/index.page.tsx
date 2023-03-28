import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { Sidebar } from "@/components/Sidebar";
import { Binoculars } from "phosphor-react";
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
            <Input type="search" placeholder="Buscar livro ou autor" />
          </ExploreFormSearch>
        </PageTitle>
        <Categories />
        <Books />
      </ExploreContent>
    </ExploreContainer>
  );
}
