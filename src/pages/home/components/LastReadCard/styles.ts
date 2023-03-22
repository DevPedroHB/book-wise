import { styled } from "@/styles/stitches.config";

export const LastReadCardContainer = styled("div", {
  padding: "$5 $6",
  backgroundColor: "$gray600",
  borderRadius: "8px",
  display: "flex",
  gap: "$6",

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

export const LastReadDetails = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$6",

  p: {
    color: "$gray300",
    fontSize: "$sm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
  },
});

export const LastReadMainInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const LastReadMyInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "$2",

  span: {
    color: "$gray300",
    fontSize: "$sm",
    whiteSpace: "nowrap",
  },

  div: {
    display: "flex",
    gap: "$1",

    svg: {
      color: "$purple100",
    },
  },
});

export const LastReadTitle = styled("div", {
  h4: {
    lineHeight: "$short",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});
