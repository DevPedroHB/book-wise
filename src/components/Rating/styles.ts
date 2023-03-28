import { styled } from "@/styles/stitches.config";

export const RatingComponent = styled("div", {
  display: "flex",
  gap: "$1",

  svg: {
    color: "$purple100",
  },

  variants: {
    marginLeft: {
      true: {
        marginLeft: "auto",
      },
    },

    error: {
      true: {
        svg: {
          color: "$red100",
        },
      },
    },
  },
});
