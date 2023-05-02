import { BookCard, IBookWithAvgRating } from "@/components/BookCard";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { BooksComponent } from "./styles";

interface IBooks {
  search: string;
  selectedCategory: string | null;
}

export function Books({ search, selectedCategory }: IBooks) {
  const { data: books } = useQuery<IBookWithAvgRating[]>(
    ["books", selectedCategory],
    async () => {
      const { data } = await api.get("/books", {
        params: {
          category: selectedCategory,
        },
      });

      return data?.books ?? [];
    }
  );

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <BooksComponent>
      {filteredBooks?.map((book) => (
        <BookCard key={book.id} variant="type-2" book={book} />
      ))}
    </BooksComponent>
  );
}
