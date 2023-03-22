import Image from "next/image";
import { Rating } from "../Rating";
import { BookCardComponent, BookCardDetails, BookCardTitle } from "./styles";

export function BookCard() {
  return (
    <BookCardComponent>
      <Image
        src="/images/codigo-limpo.png"
        width={64}
        height={94}
        alt="Imagem de capa do livro ..."
      />
      <BookCardDetails>
        <BookCardTitle>
          <h4>A revolução dos bichos</h4>
          <span>George Orwell</span>
        </BookCardTitle>
        <Rating starSize={16} />
      </BookCardDetails>
    </BookCardComponent>
  );
}
