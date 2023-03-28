import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
import { LoginModal } from "../LoginModal";
import { Rating } from "../Rating";
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

export function SidePanel() {
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
                <Rating starSize={20} />
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
        <SidePanelTitle>
          <span>Avaliações</span>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Avaliar</button>
            </Dialog.Trigger>
            <LoginModal />
          </Dialog.Root>
        </SidePanelTitle>
        <SidePanelComments>
          {new Array(3).fill(true).map((_, i) => (
            <SidePanelCardComment key={i} />
          ))}
        </SidePanelComments>
      </SidePanelDialogContent>
    </Dialog.Portal>
  );
}
