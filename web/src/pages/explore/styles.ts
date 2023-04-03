import { styled } from "@/styles/stitches.config";

export const ExploreContainer = styled("main", {
  display: "flex",
});

export const ExploreContent = styled("div", {
  flex: 1,
  height: "100vh",
  padding: "4.5rem 6rem",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "-ms-overflow-style": "none",
  "scrollbar-width": "none",

  "@bp2": {
    padding: "1.25rem 1.25rem 1.25rem 7.25rem",
  },
});

export const ExploreSearch = styled("div", {
  maxWidth: "25rem",
  width: "100%",
});
