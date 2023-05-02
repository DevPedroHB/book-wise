import { Sidebar } from "@/components/Sidebar";
import { NextSeo } from "next-seo";
import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface IDefaultLayout {
  title: string;
  children: ReactNode;
}

export function DefaultLayout({ title, children }: IDefaultLayout) {
  return (
    <>
      <NextSeo title={`${title} | BookWise`} />
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </>
  );
}
