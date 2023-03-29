import logoResponsiveImg from "@/assets/images/logo-responsive.png";
import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import {
  Binoculars,
  CaretRight,
  ChartLineUp,
  SignIn,
  User,
} from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { SidebarLink } from "../SidebarLink";
import {
  SidebarButtonToggle,
  SidebarComponent,
  SidebarLogin,
  SidebarMenu,
} from "./styles";

export const isAuthenticated = true;

export function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <SidebarComponent toggle={toggle}>
      <SidebarButtonToggle onClick={() => setToggle(!toggle)} toggle={toggle}>
        <CaretRight size={16} weight="bold" />
      </SidebarButtonToggle>
      {toggle ? (
        <Image src={logoImg} alt="Logotipo BookWise" />
      ) : (
        <Image src={logoResponsiveImg} alt="Logotipo BookWise" />
      )}
      <SidebarMenu toggle={toggle}>
        <SidebarLink href="/">
          <ChartLineUp size={24} />
          <span>Início</span>
        </SidebarLink>
        <SidebarLink href="/explore">
          <Binoculars size={24} />
          <span>Explorar</span>
        </SidebarLink>
        {isAuthenticated && (
          <SidebarLink href="/profile/DevPedroHB">
            <User size={24} />
            <span>Perfil</span>
          </SidebarLink>
        )}
      </SidebarMenu>
      <SidebarLogin
        href="/login"
        authenticated={isAuthenticated}
        toggle={toggle}
      >
        {isAuthenticated ? (
          <>
            <Avatar
              avatarSize={32}
              imgUrl="https://github.com/DevPedroHB.png"
            />
            <p>Pedro Henrique Bérgamo</p>
          </>
        ) : (
          <span>Fazer login</span>
        )}
        <SignIn size={20} />
      </SidebarLogin>
    </SidebarComponent>
  );
}
