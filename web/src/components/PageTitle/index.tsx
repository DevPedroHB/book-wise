import { ReactNode } from "react";
import { PageTitleComponent } from "./styles";

interface IPageTitle {
  children: ReactNode;
}

export function PageTitle({ children }: IPageTitle) {
  return <PageTitleComponent>{children}</PageTitleComponent>;
}
