import { VariantProps } from "@stitches/react";
import { Star } from "phosphor-react";
import { useState } from "react";
import { RatingComponent } from "./styles";

interface IRating extends VariantProps<typeof RatingComponent> {
  starSize: number;
  rating: number;
  onChange?: (rating: number) => void;
}

export function Rating({ starSize, rating, onChange, ...props }: IRating) {
  const [previewValue, setPreviewValue] = useState(0);
  const ratingValue = onChange ? previewValue : rating;

  function handleMouseEnter(value: number) {
    onChange && setPreviewValue(value);
  }

  function handleMouseLeave() {
    onChange && setPreviewValue(rating);
  }

  return (
    <RatingComponent {...props}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <Star
          key={starIndex}
          size={starSize}
          weight={starIndex <= ratingValue ? "fill" : "regular"}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          onClick={() => (onChange ? onChange(starIndex) : null)}
          style={onChange && { cursor: "pointer" }}
        />
      ))}
    </RatingComponent>
  );
}
