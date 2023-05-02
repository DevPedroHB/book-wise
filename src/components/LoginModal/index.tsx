import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { X } from "phosphor-react";
import { AuthButtons } from "../AuthButtons";
import {
  LoginModalDialogClose,
  LoginModalDialogContent,
  LoginModalDialogOverlay,
  LoginModalDialogTitle,
} from "./styles";

export function LoginModal() {
  const { query, pathname } = useRouter();
  const paramBookId = query.book as string;

  return (
    <Dialog.Portal>
      <LoginModalDialogOverlay />
      <LoginModalDialogContent>
        <LoginModalDialogTitle>
          Faça o login para deixar sua avaliação
        </LoginModalDialogTitle>
        <LoginModalDialogClose>
          <X size={24} weight="bold" />
        </LoginModalDialogClose>
        <AuthButtons
          callbackUrl={
            !!paramBookId ? `/${pathname}?book=${paramBookId}` : `${pathname}`
          }
        />
      </LoginModalDialogContent>
    </Dialog.Portal>
  );
}
