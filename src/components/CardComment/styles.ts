import { styled } from "@/styles/stitches.config";

export const CardCommentComponent = styled("div", {
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const CardHeader = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",
});

export const CardHeaderUser = styled("div", {
  flex: 1,

  h4: {
    fontWeight: "$regular",
    whiteSpace: "nowrap",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});

export const CardBody = styled("div", {
  display: "flex",
  gap: "$5",

  img: {
    width: "auto",
    height: "9.5rem",
    objectFit: "cover",
    borderRadius: "4px",
  },

  "@bp2": {
    flexDirection: "column",
  },
});

export const CardDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",

  div: {
    h4: {
      lineHeight: "$short",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 1,
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
  },

  p: {
    color: "$gray300",
    fontSize: "$sm",

    button: {
      backgroundColor: "transparent",
      border: 0,
      color: "$purple100",
      fontWeight: "$bold",
      fontSize: "$sm",
      textDecoration: "none",
    },
  },
});
