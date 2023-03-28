import logoGitHubImg from "@/assets/images/logo-github.png";
import logoGoogleImg from "@/assets/images/logo-google.png";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import {
  LoginModalDialogClose,
  LoginModalDialogContent,
  LoginModalDialogOverlay,
  LoginModalDialogTitle,
  LoginModalOptions,
} from "./styles";

export function LoginModal() {
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
        <LoginModalOptions>
          <button>
            <Image src={logoGoogleImg} alt="Logotipo Google" />
            Entrar com Google
          </button>
          <button>
            <Image src={logoGitHubImg} alt="Logotipo GitHub" />
            Entrar com GitHub
          </button>
        </LoginModalOptions>
      </LoginModalDialogContent>
    </Dialog.Portal>
  );
}
