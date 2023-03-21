import { styled } from "@/styles/stitches.config";

export const BookCardContainer = styled("div", {
  padding: "1rem 1.25rem",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "flex",
  gap: "$5",

  img: {
    width: "auto",
    height: "100%",
    objectFit: "cover",
  },
});

export const BookCardDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const BookCardTitle = styled("div", {
  h4: {
    lineHeight: "$short",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});

export const BookCardRating = styled("div", {
  display: "flex",
  gap: "$1",

  svg: {
    color: "$purple100",
  },
});
