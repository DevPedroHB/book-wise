import logoGitHubImg from "@/assets/images/logo-github.png";
import logoGoogleImg from "@/assets/images/logo-google.png";
import logoRocketLaunchImg from "@/assets/images/logo-rocket-launch.png";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthButtonsContainer } from "./styles";

interface IAuthButtons {
  callbackUrl?: string;
}

export function AuthButtons({ callbackUrl = "/" }: IAuthButtons) {
  const router = useRouter();

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push(callbackUrl);

      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  }

  return (
    <AuthButtonsContainer>
      <button onClick={() => handleSignIn("google")}>
        <Image src={logoGoogleImg} alt="Logotipo Google" />
        Entrar com Google
      </button>
      <button onClick={() => handleSignIn("github")}>
        <Image src={logoGitHubImg} alt="Logotipo GitHub" />
        Entrar com GitHub
      </button>
      {callbackUrl === "/" && (
        <button onClick={() => handleSignIn()}>
          <Image src={logoRocketLaunchImg} alt="Ícone de foguete" />
          Acessar como visitante
        </button>
      )}
    </AuthButtonsContainer>
  );
}
