import Image from "next/image";
import Link from "next/link";
import { Star, User } from "phosphor-react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  CardBody,
  CardCommentComponent,
  CardDetails,
  CardHeader,
  CardHeaderRating,
  CardHeaderUser,
} from "./styles";

export function CardComment() {
  return (
    <CardCommentComponent>
      <CardHeader>
        <AvatarRoot>
          <AvatarImage src="https://github.com/DevPedroHB.png" alt="" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </AvatarRoot>
        <CardHeaderUser>
          <h4>Pedro Henrique</h4>
          <span>Hoje</span>
        </CardHeaderUser>
        <CardHeaderRating>
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="thin" />
        </CardHeaderRating>
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
