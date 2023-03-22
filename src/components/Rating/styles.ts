import { styled } from "@/styles/stitches.config";

export const RatingComponent = styled("div", {
  display: "flex",
  gap: "$1",

  svg: {
    color: "$purple100",
  },

  variants: {
    marginAuto: {
      true: {
        margin: "0 auto",
      },
    },
  },
});
