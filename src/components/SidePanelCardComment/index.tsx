import { Avatar } from "../Avatar";
import { Rating } from "../Rating";
import {
  SidePanelCardCommentComponent,
  SidePanelCardCommentHeader,
  SidePanelCardCommentUser,
} from "./styles";

export function SidePanelCardComment() {
  return (
    <SidePanelCardCommentComponent>
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
        <Rating starSize={16} marginLeft />
      </SidePanelCardCommentHeader>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </SidePanelCardCommentComponent>
  );
}
