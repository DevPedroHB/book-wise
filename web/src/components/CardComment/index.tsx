import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { Rating } from "../Rating";
import {
  CardBody,
  CardCommentComponent,
  CardDetails,
  CardHeader,
  CardHeaderUser,
} from "./styles";

export function CardComment() {
  return (
    <CardCommentComponent>
      <CardHeader>
        <Avatar
          avatarSize={40}
          imgUrl="https://github.com/DevPedroHB.png"
          altText="Avatar de DevPedroHB"
        />
        <CardHeaderUser>
          <h4>Pedro Henrique</h4>
          <span>Hoje</span>
        </CardHeaderUser>
        <Rating starSize={16} rating={2} />
      </CardHeader>
      <CardBody>
        <Image
          src="/images/codigo-limpo.png"
          width={108}
          height={152}
          alt="Imagem de capa do livro ..."
        />
        <CardDetails>
          <div>
            <h4>O Hobbit</h4>
            <span>J.R.R. Tolkien</span>
          </div>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh <Link href="/">ver mais</Link>
          </p>
        </CardDetails>
      </CardBody>
    </CardCommentComponent>
  );
}
