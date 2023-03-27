import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
import { Rating } from "../Rating";
import { SidePanelCardComment } from "../SidePanelCardComment";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  SidePanelAbout,
  SidePanelBook,
  SidePanelComments,
  SidePanelInfo,
  SidePanelTitle,
} from "./styles";

export function SidePanel() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>
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
        </DialogTitle>
        <DialogClose>
          <X size={24} weight="bold" />
        </DialogClose>
        <SidePanelTitle>
          <span>Avaliações</span>
          <button>Avaliar</button>
        </SidePanelTitle>
        <SidePanelComments>
          {new Array(3).fill(true).map((_, i) => (
            <SidePanelCardComment key={i} />
          ))}
        </SidePanelComments>
      </DialogContent>
    </Dialog.Portal>
  );
}
