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

    svg: {
      color: "$green100",
    },
  },

  button: {
    padding: "$1 $2",
    backgroundColor: "transparent",
    color: "$gray200",
    border: 0,
    borderRadius: "4px",
    fontWeight: "$bold",
    display: "flex",
    alignItems: "center",
    gap: "$3",
    transition: "background-color .2s",

    "&:hover": {
      backgroundColor: "rgba(131, 129, 217, 0.06)",
    },
  },
});
