import { styled } from "@/styles/stitches.config";

export const BookCardComponent = styled("div", {
  width: "100%",
  padding: "$4 $5",
  backgroundColor: "$gray700",
  outline: "2px solid transparent",
  borderRadius: "8px",
  display: "flex",
  gap: "$5",
  position: "relative",
  overflow: "hidden",
  transition: "outline-color .2s",

  img: {
    width: "auto",
    height: "100%",
    objectFit: "cover",
    borderRadius: "4px",
  },

  "&:hover": {
    outlineColor: "$gray600",
  },

  variants: {
    variant: {
      "type-1": {
        maxWidth: "18.75rem",
      },

      "type-2": {
        width: "100%",
      },
    },
  },
});

export const BookCardTag = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  padding: ".25rem .75rem",
  backgroundColor: "$green300",
  borderRadius: "0 0 0 4px",
  display: "none",

  small: {
    color: "$green100",
    fontWeight: "$bold",
    fontSize: "$xs",
    lineHeight: "130%",
    textTransform: "uppercase",
  },

  variants: {
    read: {
      true: {
        display: "block",
      },
    },
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
