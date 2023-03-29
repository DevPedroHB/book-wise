import { styled } from "@/styles/stitches.config";

export const ProfileAnalyticsComponent = styled("div", {
  height: "100vh",
  padding: "9.125rem 6rem 4.5rem 0",
  overflowY: "scroll",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "-ms-overflow-style": "none",
  "scrollbar-width": "none",

  "@bp2": {
    height: "auto",
    padding: "1.25rem 1.25rem 1.25rem 7.25rem",
  },
});

export const ProfileAnalyticsContent = styled("div", {
  borderLeft: "1px solid $gray700",
  display: "grid",
  placeItems: "center",
  gap: "$8",
});

export const ProfileAnalyticsHeader = styled("div", {
  display: "grid",
  placeItems: "center",
  gap: "$5",

  div: {
    textAlign: "center",

    h3: {
      fontSize: "$xl",
      lineHeight: "$short",
    },

    span: {
      color: "$gray400",
      fontSize: "$sm",
    },
  },
});

export const ProfileAnalyticsDivisor = styled("div", {
  width: "2rem",
  height: ".25rem",
  background: "$gradient-horizontal",
  borderRadius: "$full",
});

export const ProfileAnalyticsWrapper = styled("div", {
  padding: "1.25rem 3.5rem",
  display: "grid",
  gap: "$10",
});

export const ProfileAnalyticsItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  svg: {
    color: "$green100",
  },

  h4: {
    color: "$gray200",
    lineHeight: "$short",
  },

  span: {
    color: "$gray300",
    fontSize: "$sm",
  },
});
