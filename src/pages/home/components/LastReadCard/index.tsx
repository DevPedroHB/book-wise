import Image from "next/image";
import { Star } from "phosphor-react";
import {
  LastReadCardComponent,
  LastReadDetails,
  LastReadMainInfo,
  LastReadMyInfo,
  LastReadTitle,
} from "./styles";

export function LastReadCard() {
  return (
    <LastReadCardComponent>
      <Image
        src="/images/codigo-limpo.png"
        width={108}
        height={152}
        alt="Imagem de capa do livro ..."
      />
      <LastReadDetails>
        <LastReadMainInfo>
          <LastReadMyInfo>
            <span>Há 2 dias</span>
            <div>
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="fill" />
              <Star size={16} weight="thin" />
            </div>
          </LastReadMyInfo>
          <LastReadTitle>
            <h4>Entendendo Algoritmos</h4>
            <span>Aditya Bhargava</span>
          </LastReadTitle>
        </LastReadMainInfo>
        <p>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </LastReadDetails>
    </LastReadCardComponent>
  );
}
