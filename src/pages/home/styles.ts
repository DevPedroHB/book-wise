import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled("main", {
  display: "flex",
});

export const HomeContent = styled("div", {
  flex: 1,
  height: "100vh",
  padding: "4.5rem 6rem",
  overflowY: "scroll",

  "@bp2": {
    padding: "1.25rem 1.25rem 1.25rem 7.25rem",
  },
});

export const HomeWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
});

export const MyBooks = styled("section", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const TrendingBooks = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const CardGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  variants: {
    yourLastRead: {
      true: {
        marginBottom: "2.125rem",
      },
    },
  },
});
