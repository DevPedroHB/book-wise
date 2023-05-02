import { styled } from "@/styles/stitches.config";

export const LastReadCardComponent = styled("div", {
  padding: "$5 $6",
  backgroundColor: "$gray600",
  border: "2px solid transparent",
  borderRadius: "8px",
  display: "flex",
  gap: "$6",
  transition: "border-color .2s",

  img: {
    width: "auto",
    height: "9.5rem",
    objectFit: "cover",
    borderRadius: "4px",
  },

  "&:hover": {
    borderColor: "$gray500",
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
