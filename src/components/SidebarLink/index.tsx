import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { SidebarLinkComponent } from "./styles";

interface ISidebarLink extends LinkProps {
  children: ReactNode;
}

export function SidebarLink({ children, ...props }: ISidebarLink) {
  const { pathname } = useRouter();

  return (
    <SidebarLinkComponent {...props} active={props.href === pathname}>
      {children}
    </SidebarLinkComponent>
  );
}
