import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import { Binoculars, ChartLineUp, SignIn, User } from "phosphor-react";
import { SidebarLink } from "../SidebarLink";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  SidebarContainer,
  SidebarLogin,
  SidebarMenu,
} from "./styles";

export function Sidebar() {
  const authenticated = false;

  return (
    <SidebarContainer>
      <Image src={logoImg} alt="Logotipo BookWise" />
      <SidebarMenu>
        <SidebarLink href="/">
          <ChartLineUp size={24} />
          Início
        </SidebarLink>
        <SidebarLink href="/explore">
          <Binoculars size={24} />
          Explorar
        </SidebarLink>
        {authenticated && (
          <SidebarLink href="/profile">
            <User size={24} />
            Perfil
          </SidebarLink>
        )}
      </SidebarMenu>
      <SidebarLogin href="/login" authenticated={authenticated}>
        {authenticated ? (
          <>
            <AvatarRoot>
              <AvatarImage
                src="https://github.com/DevPedroHB.png"
                alt="Avatar"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </AvatarRoot>
            PedroHB
          </>
        ) : (
          "Fazer login"
        )}
        <SignIn size={20} />
      </SidebarLogin>
    </SidebarContainer>
  );
}
