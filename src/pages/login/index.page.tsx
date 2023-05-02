import HeroHomeImg from "@/assets/images/hero-home.png";
import { AuthButtons } from "@/components/AuthButtons";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { LoginContainer, LoginWrapper, WelcomeText } from "./styles";

export default function Login() {
  return (
    <>
      <NextSeo title="Login | BookWise" />
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
          <AuthButtons />
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}
