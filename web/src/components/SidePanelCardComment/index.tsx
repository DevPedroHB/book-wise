import { VariantProps } from "@stitches/react";
import { Avatar } from "../Avatar";
import { Rating } from "../Rating";
import {
  SidePanelCardCommentComponent,
  SidePanelCardCommentHeader,
  SidePanelCardCommentUser,
} from "./styles";

type TSidePanelCardComment = VariantProps<typeof SidePanelCardCommentComponent>;

export function SidePanelCardComment({ ...props }: TSidePanelCardComment) {
  return (
    <SidePanelCardCommentComponent {...props}>
      <SidePanelCardCommentHeader>
        <Avatar
          avatarSize={40}
          imgUrl="https://github.com/DevPedroHB.png"
          altText="Avatar de DevPedroHB"
        />
        <SidePanelCardCommentUser>
          <h4>Pedro Henrique</h4>
          <span>Há 2 dias</span>
        </SidePanelCardCommentUser>
        <Rating starSize={16} rating={5} />
      </SidePanelCardCommentHeader>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </SidePanelCardCommentComponent>
  );
}
