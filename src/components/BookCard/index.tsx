import Image from "next/image";
import { Star } from "phosphor-react";
import {
  BookCardContainer,
  BookCardDetails,
  BookCardRating,
  BookCardTitle,
} from "./styles";

export function BookCard() {
  return (
    <BookCardContainer>
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
        <BookCardRating>
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="thin" />
        </BookCardRating>
      </BookCardDetails>
    </BookCardContainer>
  );
}
