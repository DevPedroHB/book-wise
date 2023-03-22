import { styled } from "@/styles/stitches.config";

export const BookCardComponent = styled("div", {
  padding: "$4 $5",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "flex",
  gap: "$5",

  img: {
    width: "auto",
    height: "5.875rem",
    objectFit: "cover",
    borderRadius: "4px",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
  },
});
