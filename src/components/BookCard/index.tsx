import { Book } from "@prisma/client";
import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps } from "@stitches/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Rating } from "../Rating";
import { SidePanel } from "../SidePanel";
import {
  BookCardComponent,
  BookCardDetails,
  BookCardTag,
  BookCardTitle,
} from "./styles";

export interface IBookWithAvgRating extends Book {
  avgRating: number;
  alreadyRead: boolean;
}

interface IBookCard extends VariantProps<typeof BookCardComponent> {
  book: IBookWithAvgRating;
}

export function BookCard({ book, ...props }: IBookCard) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const paramBookId = router.query.book as string;

  useEffect(() => {
    if (paramBookId === book.id) {
      setOpen(true);
    }
  }, [paramBookId]);

  function onOpenChange(open: boolean) {
    if (open) {
      router.push(`/${router.pathname}?book=${book.id}`, undefined, {
        shallow: true,
      });
    } else {
      router.push(`${router.pathname}`, undefined, { shallow: true });
    }

    setOpen(open);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <BookCardComponent {...props}>
          <BookCardTag read={book.alreadyRead}>
            <small>Lido</small>
          </BookCardTag>
          <Image src={book.cover_url} width={64} height={94} alt={book.name} />
          <BookCardDetails>
            <BookCardTitle>
              <h4>{book.name}</h4>
              <span>{book.author}</span>
            </BookCardTitle>
            <Rating starSize={16} rating={book.avgRating} />
          </BookCardDetails>
        </BookCardComponent>
      </Dialog.Trigger>
      <SidePanel bookId={book.id} open={open} />
    </Dialog.Root>
  );
}
