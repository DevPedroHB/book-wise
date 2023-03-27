import { BookCard } from "@/components/BookCard";
import { BooksComponent } from "./styles";

const read = [3, 7, 12];

export function Books() {
  return (
    <BooksComponent>
      {new Array(15).fill(true).map((_, i) => (
        <BookCard key={i} variant="type-2" read={read.includes(i)} />
      ))}
    </BooksComponent>
  );
}
