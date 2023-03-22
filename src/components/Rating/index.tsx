import { VariantProps } from "@stitches/react";
import { Star } from "phosphor-react";
import { RatingComponent } from "./styles";

interface IRating extends VariantProps<typeof RatingComponent> {
  starSize: number;
}

export function Rating({ starSize }: IRating) {
  return (
    <RatingComponent>
      <Star size={starSize} weight="fill" />
      <Star size={starSize} weight="fill" />
      <Star size={starSize} weight="fill" />
      <Star size={starSize} weight="fill" />
      <Star size={starSize} weight="thin" />
    </RatingComponent>
  );
}
