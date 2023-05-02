import { Rating as StarsRating } from "@/components/Rating";
import dayjs from "@/lib/dayjs";
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import Image from "next/image";
import {
  ProfileDayListBookDetails,
  ProfileDayListCard,
  ProfileDayListCardHeader,
  ProfileDayListComponent,
  ProfileDayListDate,
  ProfileDayListWrapper,
} from "./styles";

export interface IProfileRating extends Rating {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
}

interface IProfileDayList {
  rating: IProfileRating;
}

export function ProfileDayList({ rating }: IProfileDayList) {
  return (
    <ProfileDayListComponent>
      <ProfileDayListDate>
        {dayjs(rating.created_at).fromNow()}
      </ProfileDayListDate>
      <ProfileDayListWrapper>
        <ProfileDayListCard>
          <ProfileDayListCardHeader>
            <Image
              src={rating.book.cover_url}
              width={98}
              height={134}
              alt={rating.book.name}
            />
            <ProfileDayListBookDetails>
              <div>
                <h4>{rating.book.name}</h4>
                <span>{rating.book.author}</span>
              </div>
              <StarsRating starSize={16} rating={rating.rate} />
            </ProfileDayListBookDetails>
          </ProfileDayListCardHeader>
          <p>{rating.description}</p>
        </ProfileDayListCard>
      </ProfileDayListWrapper>
    </ProfileDayListComponent>
  );
}
