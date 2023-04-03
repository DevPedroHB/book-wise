import HeroHomeImg from "@/assets/images/hero-home.png";
import logoGitHubImg from "@/assets/images/logo-github.png";
import logoGoogleImg from "@/assets/images/logo-google.png";
import logoRocketLaunchImg from "@/assets/images/logo-rocket-launch.png";
import Image from "next/image";
import { LoginContainer, LoginWrapper, Options, WelcomeText } from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <Image
        src={HeroHomeImg}
        alt="Imagem de uma mulher lendo um livro no sofá"
      />
      <LoginWrapper>
        <WelcomeText>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </WelcomeText>
        <Options>
          <button>
            <Image src={logoGoogleImg} alt="Logotipo Google" />
            Entrar com Google
          </button>
          <button>
            <Image src={logoGitHubImg} alt="Logotipo GitHub" />
            Entrar com GitHub
          </button>
          <button>
            <Image src={logoRocketLaunchImg} alt="Ícone de foguete" />
            Acessar como visitante
          </button>
        </Options>
      </LoginWrapper>
    </LoginContainer>
  );
}
