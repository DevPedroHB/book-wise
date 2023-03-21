import { styled } from "@/styles/stitches.config";

export const PageTitleComponent = styled("h2", {
  marginBottom: "$10",
  fontWeight: "$bold",
  fontSize: "$2xl",
  lineHeight: "$short",
  display: "flex",
  alignItems: "center",
  gap: "$3",

  svg: {
    color: "$green100",
  },
});
