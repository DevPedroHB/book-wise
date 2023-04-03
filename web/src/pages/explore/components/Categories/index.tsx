import { ToggleGroupItem, ToggleGroupRoot } from "./styles";

const categories = [
  "Tudo",
  "Computação",
  "Educação",
  "Fantasia",
  "Ficção científica",
  "Horror",
  "HQs",
  "Suspense",
];

export function Categories() {
  return (
    <ToggleGroupRoot type="single" defaultValue="Tudo">
      {categories.map((category) => (
        <ToggleGroupItem key={category} value={category}>
          {category}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );
}
