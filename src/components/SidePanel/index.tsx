import { api } from "@/lib/axios";
import { CommentForm } from "@/pages/explore/components/CommentForm";
import { CategoriesOnBooks, Category } from "@prisma/client";
import * as Dialog from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BookOpen, BookmarkSimple, X } from "phosphor-react";
import { useState } from "react";
import { IBookWithAvgRating } from "../BookCard";
import { LoginModal } from "../LoginModal";
import { Rating } from "../Rating";
import {
  IRatingWithAuthor,
  SidePanelCardComment,
} from "../SidePanelCardComment";
import {
  SidePanelAbout,
  SidePanelBook,
  SidePanelComments,
  SidePanelDialogClose,
  SidePanelDialogContent,
  SidePanelDialogOverlay,
  SidePanelDialogTitle,
  SidePanelInfo,
  SidePanelTitle,
} from "./styles";

interface ISidePanel {
  bookId: string;
  open: boolean;
}

interface IBookDetails extends IBookWithAvgRating {
  ratings: IRatingWithAuthor[];
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
}

export function SidePanel({ bookId, open }: ISidePanel) {
  const [newFormComment, setNewFormComment] = useState(false);
  const { data } = useSession();

  const { data: book } = useQuery<IBookDetails>(
    ["book", bookId],
    async () => {
      const { data } = await api.get(`/books/details/${bookId}`);

      return data?.book ?? {};
    },
    {
      enabled: open,
    }
  );

  const ratingsLength = book?.ratings.length ?? 0;
  const categories =
    book?.categories.map((x) => x.category.name).join(", ") ?? "";

  const sortedRatingsByDate = book?.ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const canRate = book?.ratings.every(
    (rating) => rating.user_id !== data?.user.id
  );

  return (
    <Dialog.Portal>
      <SidePanelDialogOverlay />
      <SidePanelDialogContent>
        <SidePanelDialogClose>
          <X size={24} weight="bold" />
        </SidePanelDialogClose>
        {!book ? (
          <p>Carregando...</p>
        ) : (
          <>
            <SidePanelDialogTitle>
              <SidePanelBook>
                <Image
                  src={book.cover_url}
                  width={171.65}
                  height={242}
                  alt={book.name}
                />
                <SidePanelInfo>
                  <div>
                    <h4>{book.name}</h4>
                    <span>{book.author}</span>
                  </div>
                  <div>
                    <Rating starSize={20} rating={3} />
                    <small>
                      {ratingsLength}{" "}
                      {ratingsLength === 1 ? "avaliação" : "avaliações"}
                    </small>
                  </div>
                </SidePanelInfo>
              </SidePanelBook>
              <SidePanelAbout>
                <div>
                  <BookmarkSimple size={24} />
                  <div>
                    <span>Categorias</span>
                    <p>{categories}</p>
                  </div>
                </div>
                <div>
                  <BookOpen size={24} />
                  <div>
                    <span>Páginas</span>
                    <p>{book.total_pages}</p>
                  </div>
                </div>
              </SidePanelAbout>
            </SidePanelDialogTitle>
            <SidePanelTitle newFormComment={newFormComment}>
              <span>Avaliações</span>
              {data ? (
                <>
                  {canRate && (
                    <button onClick={() => setNewFormComment(!newFormComment)}>
                      Avaliar
                    </button>
                  )}
                </>
              ) : (
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button>Avaliar</button>
                  </Dialog.Trigger>
                  <LoginModal />
                </Dialog.Root>
              )}
            </SidePanelTitle>
            <SidePanelComments>
              {newFormComment && (
                <CommentForm
                  setNewFormComment={setNewFormComment}
                  bookId={book.id}
                />
              )}
              {sortedRatingsByDate?.map((rating) => (
                <SidePanelCardComment key={rating.id} rating={rating} />
              ))}
            </SidePanelComments>
          </>
        )}
      </SidePanelDialogContent>
    </Dialog.Portal>
  );
}
