import { Rating } from "@/components/Rating";
import Image from "next/image";
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
            <Rating starSize={16} rating={1} />
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
