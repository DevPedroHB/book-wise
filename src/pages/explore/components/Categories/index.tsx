import { api } from "@/lib/axios";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { ToggleGroupItem, ToggleGroupRoot } from "./styles";

interface ICategories {
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}

export function Categories({ setSelectedCategory }: ICategories) {
  const { data: categories } = useQuery<Category[]>(
    ["categories"],
    async () => {
      const { data } = await api.get("/books/categories");

      return data?.categories ?? [];
    }
  );

  return (
    <ToggleGroupRoot
      type="single"
      defaultValue="Tudo"
      onValueChange={(value) =>
        value === "Tudo"
          ? setSelectedCategory(null)
          : setSelectedCategory(value)
      }
    >
      <ToggleGroupItem value="Tudo">Tudo</ToggleGroupItem>
      {categories?.map((category) => (
        <ToggleGroupItem key={category.id} value={category.id}>
          {category.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );
}
