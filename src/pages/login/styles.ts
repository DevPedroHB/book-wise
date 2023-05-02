import { styled } from "@/styles/stitches.config";

export const LoginContainer = styled("main", {
  display: "flex",

  "& > img": {
    width: "auto",
    height: "100vh",
    padding: "$5",
    objectFit: "cover",

    "@bp2": {
      display: "none",
    },
  },
});

export const LoginWrapper = styled("div", {
  flex: 1,
  height: "100vh",
  maxWidth: "26.25rem",
  margin: "0 auto",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$10",
});

export const WelcomeText = styled("div", {
  display: "grid",
  gap: ".125rem",

  h1: {
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$short",
  },

  p: {
    color: "$gray200",
  },
});
