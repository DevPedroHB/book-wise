import Link from "next/link";
import { CaretRight } from "phosphor-react";
import { SectionTitleComponent } from "./styles";

interface ISectionTitle {
  title: string;
  href?: string;
}

export function SectionTitle({ title, href }: ISectionTitle) {
  return (
    <SectionTitleComponent>
      <h3>{title}</h3>
      {href && (
        <Link href={href}>
          Ver todos
          <CaretRight size={16} />
        </Link>
      )}
    </SectionTitleComponent>
  );
}
