import { styled } from "@/styles/stitches.config";

export const PageTitleComponent = styled("section", {
  marginBottom: "$10",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "$3",

  h2: {
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$short",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "$3",
  },

  svg: {
    color: "$green100",
  },
});
