import logoResponsiveImg from "@/assets/images/logo-responsive.png";
import logoImg from "@/assets/images/logo.png";
import { useSidebar } from "@/hooks/useSidebar";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  Binoculars,
  CaretRight,
  ChartLineUp,
  SignIn,
  User,
} from "phosphor-react";
import { Avatar } from "../Avatar";
import { SidebarLink } from "../SidebarLink";
import {
  SidebarButtonToggle,
  SidebarComponent,
  SidebarLogin,
  SidebarMenu,
} from "./styles";

export const isAuthenticated = false;

export function Sidebar() {
  const { toggle, handleToggle } = useSidebar();
  const { data } = useSession();

  return (
    <SidebarComponent toggle={toggle}>
      <SidebarButtonToggle onClick={handleToggle} toggle={toggle}>
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
        {data && (
          <SidebarLink href={`/profile/${data.user?.id}`}>
            <User size={24} />
            <span>Perfil</span>
          </SidebarLink>
        )}
      </SidebarMenu>
      <SidebarLogin
        href="/login"
        authenticated={!!data}
        toggle={toggle}
        onClick={() => data && signOut()}
      >
        {data ? (
          <>
            <Avatar avatarSize={32} imgUrl={data.user?.avatar_url} />
            <p title={String(data.user?.name)}>{data.user?.name}</p>
          </>
        ) : (
          <span>Fazer login</span>
        )}
        <SignIn size={20} />
      </SidebarLogin>
    </SidebarComponent>
  );
}
