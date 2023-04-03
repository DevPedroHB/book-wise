import { VariantProps } from "@stitches/react";
import { Star } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { RatingComponent } from "./styles";

interface IRating extends VariantProps<typeof RatingComponent> {
  starSize: number;
  rating: number;
  setRating?: Dispatch<SetStateAction<number>>;
}

export function Rating({ starSize, rating, setRating, ...props }: IRating) {
  return (
    <RatingComponent {...props}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <Star
          key={starIndex}
          size={starSize}
          weight={rating >= starIndex ? "fill" : "regular"}
          onClick={() => (setRating ? setRating(starIndex) : null)}
        />
      ))}
    </RatingComponent>
  );
}
