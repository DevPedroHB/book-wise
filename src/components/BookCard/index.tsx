import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps } from "@stitches/react";
import Image from "next/image";
import { Rating } from "../Rating";
import { SidePanel } from "../SidePanel";
import {
  BookCardComponent,
  BookCardDetails,
  BookCardTag,
  BookCardTitle,
} from "./styles";

interface IBookCard extends VariantProps<typeof BookCardComponent> {
  read?: boolean;
}

export function BookCard({ read, ...props }: IBookCard) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BookCardComponent {...props}>
          <BookCardTag read={read}>
            <small>Lido</small>
          </BookCardTag>
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
      </Dialog.Trigger>
      <SidePanel />
    </Dialog.Root>
  );
}
