import { useToggleShowMore } from "@/hooks/useToggleShowMore";
import dayjs from "@/lib/dayjs";
import { Book, Rating, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { Rating as StarsRating } from "../Rating";
import {
  CardBody,
  CardCommentComponent,
  CardDetails,
  CardHeader,
  CardHeaderUser,
} from "./styles";

const MAX_COMMENT_LENGTH = 180;

export interface IRatingWithAuthorAndBook extends Rating {
  user: User;
  book: Book;
}

interface ICardComment {
  rating: IRatingWithAuthorAndBook;
}

export function CardComment({ rating }: ICardComment) {
  const { showMore, toggleShowMore, text } = useToggleShowMore(
    rating.book.summary,
    MAX_COMMENT_LENGTH
  );

  return (
    <CardCommentComponent>
      <CardHeader>
        <Link href={`/profile/${rating.user_id}`}>
          <Avatar
            avatarSize={40}
            imgUrl={rating.user.avatar_url}
            altText={`Avatar de ${rating.user.name}`}
          />
        </Link>
        <CardHeaderUser>
          <h4>{rating.user.name}</h4>
          <span>{dayjs(rating.created_at).fromNow()}</span>
        </CardHeaderUser>
        <StarsRating starSize={16} rating={rating.rate} />
      </CardHeader>
      <CardBody>
        <Image
          src={rating.book.cover_url}
          width={108}
          height={152}
          alt={rating.book.name}
        />
        <CardDetails>
          <div>
            <h4>{rating.book.name}</h4>
            <span>{rating.book.author}</span>
          </div>
          <p>
            {text}
            &nbsp;
            {rating.book.summary.length > MAX_COMMENT_LENGTH && (
              <button onClick={toggleShowMore}>
                {showMore ? "ver menos" : "ver mais"}
              </button>
            )}
          </p>
        </CardDetails>
      </CardBody>
    </CardCommentComponent>
  );
}
