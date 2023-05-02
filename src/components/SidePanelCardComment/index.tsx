import dayjs from "@/lib/dayjs";
import { Rating, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { Rating as StarsRating } from "../Rating";
import {
  SidePanelCardCommentComponent,
  SidePanelCardCommentHeader,
  SidePanelCardCommentUser,
} from "./styles";

export interface IRatingWithAuthor extends Rating {
  user: User;
}

interface ISidePanelCardComment {
  rating: IRatingWithAuthor;
}

export function SidePanelCardComment({ rating }: ISidePanelCardComment) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === rating.user_id;

  return (
    <SidePanelCardCommentComponent me={isOwner}>
      <SidePanelCardCommentHeader>
        <Link href={`/profile/${rating.user_id}`}>
          <Avatar
            avatarSize={40}
            imgUrl={rating.user.avatar_url}
            altText={`Avatar de ${rating.user.name}`}
          />
        </Link>
        <SidePanelCardCommentUser>
          <h4>{rating.user.name}</h4>
          <span>{dayjs(rating.created_at).fromNow()}</span>
        </SidePanelCardCommentUser>
        <StarsRating starSize={16} rating={rating.rate} />
      </SidePanelCardCommentHeader>
      <p>{rating.description}</p>
    </SidePanelCardCommentComponent>
  );
}
