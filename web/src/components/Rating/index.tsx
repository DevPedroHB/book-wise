import { VariantProps } from "@stitches/react";
import { Star } from "phosphor-react";
import { RatingComponent } from "./styles";

interface IRating extends VariantProps<typeof RatingComponent> {
  starSize: number;
  rating: number;
  onChange?: (rating: number) => void;
}

export function Rating({ starSize, rating, onChange, ...props }: IRating) {
  return (
    <RatingComponent {...props}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <Star
          key={starIndex}
          size={starSize}
          weight={rating >= starIndex ? "fill" : "regular"}
          onClick={() => (onChange ? onChange(starIndex) : null)}
        />
      ))}
    </RatingComponent>
  );
}
