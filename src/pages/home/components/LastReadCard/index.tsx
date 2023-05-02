import { IRatingWithAuthorAndBook } from "@/components/CardComment";
import { Rating } from "@/components/Rating";
import { useToggleShowMore } from "@/hooks/useToggleShowMore";
import dayjs from "@/lib/dayjs";
import Image from "next/image";
import {
  LastReadCardComponent,
  LastReadDetails,
  LastReadMainInfo,
  LastReadMyInfo,
  LastReadTitle,
} from "./styles";

const MAX_COMMENT_LENGTH = 180;

interface ILastReadCard {
  rating: IRatingWithAuthorAndBook;
}

export function LastReadCard({ rating }: ILastReadCard) {
  const { showMore, toggleShowMore, text } = useToggleShowMore(
    rating.book.summary,
    MAX_COMMENT_LENGTH
  );

  return (
    <LastReadCardComponent>
      <Image
        src={rating.book.cover_url}
        width={108}
        height={152}
        alt={rating.book.name}
      />
      <LastReadDetails>
        <LastReadMainInfo>
          <LastReadMyInfo>
            <span>{dayjs(rating.created_at).fromNow()}</span>
            <Rating starSize={16} rating={rating.rate} />
          </LastReadMyInfo>
          <LastReadTitle>
            <h4>{rating.book.name}</h4>
            <span>{rating.book.author}</span>
          </LastReadTitle>
        </LastReadMainInfo>
        <p>
          {text}
          &nbsp;
          {rating.book.summary.length > MAX_COMMENT_LENGTH && (
            <button onClick={toggleShowMore}>
              {showMore ? "ver menos" : "ver mais"}
            </button>
          )}
        </p>
      </LastReadDetails>
    </LastReadCardComponent>
  );
}
