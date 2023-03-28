import { CommentForm } from "@/pages/explore/components/CommentForm";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
import { useState } from "react";
import { LoginModal } from "../LoginModal";
import { Rating } from "../Rating";
import { isAuthenticated } from "../Sidebar";
import { SidePanelCardComment } from "../SidePanelCardComment";
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

const myComment = [0];

export function SidePanel() {
  const [newFormComment, setNewFormComment] = useState(false);

  return (
    <Dialog.Portal>
      <SidePanelDialogOverlay />
      <SidePanelDialogContent>
        <SidePanelDialogTitle>
          <SidePanelBook>
            <Image
              src="/images/codigo-limpo.png"
              width={171.65}
              height={242}
              alt="Imagem de capa do livro ..."
            />
            <SidePanelInfo>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <span>Zeno Rocha</span>
              </div>
              <div>
                <Rating starSize={20} rating={3} />
                <small>3 avaliações</small>
              </div>
            </SidePanelInfo>
          </SidePanelBook>
          <SidePanelAbout>
            <div>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <p>Computação, educação</p>
              </div>
            </div>
            <div>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <p>160</p>
              </div>
            </div>
          </SidePanelAbout>
        </SidePanelDialogTitle>
        <SidePanelDialogClose>
          <X size={24} weight="bold" />
        </SidePanelDialogClose>
        <SidePanelTitle newFormComment={newFormComment}>
          <span>Avaliações</span>
          {isAuthenticated ? (
            <button onClick={() => setNewFormComment(!newFormComment)}>
              Avaliar
            </button>
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
            <CommentForm setNewFormComment={setNewFormComment} />
          )}
          {new Array(3).fill(true).map((_, i) => (
            <SidePanelCardComment key={i} me={myComment.includes(i)} />
          ))}
        </SidePanelComments>
      </SidePanelDialogContent>
    </Dialog.Portal>
  );
}
