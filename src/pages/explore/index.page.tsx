import { Sidebar } from "@/components/Sidebar";
import { ExploreContainer, ExploreContent } from "./styles";

export default function Explore() {
  return (
    <ExploreContainer>
      <Sidebar />
      <ExploreContent>
        <h1>Explore</h1>
      </ExploreContent>
    </ExploreContainer>
  );
}
