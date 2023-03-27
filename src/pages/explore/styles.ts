import { styled } from "@/styles/stitches.config";

export const ExploreContainer = styled("main", {
  display: "flex",
});

export const ExploreContent = styled("div", {
  flex: 1,
  height: "100vh",
  padding: "4.5rem 6rem",
  overflowY: "scroll",

  "@bp2": {
    padding: "1.25rem 1.25rem 1.25rem 7.25rem",
  },
});

export const ExploreFormSearch = styled("form", {
  maxWidth: "25rem",
  width: "100%",
  backgroundColor: "$gray800",
  border: "1px solid",
  borderColor: "$gray500",
  borderRadius: "4px",
  display: "flex",
  overflow: "hidden",
  transition: "border-color .2s",

  input: {
    flex: 1,
    padding: ".875rem 0 .875rem 1.25rem",
    backgroundColor: "transparent",
    color: "$gray200",
    border: 0,
    outline: "0",
    fontSize: "$sm",

    "&::placeholder": {
      color: "$gray400",
    },
  },

  button: {
    padding: "0 1.25rem",
    backgroundColor: "transparent",
    color: "$gray200",
    border: 0,
    lineHeight: 0,
  },

  svg: {
    color: "$gray500",
    transition: "color .2s",
  },

  "&:has(:focus)": {
    borderColor: "$green200",

    svg: {
      color: "$green200",
    },
  },

  "&:has(:hover)": {
    borderColor: "$green200",

    svg: {
      color: "$green200",
    },
  },
});
