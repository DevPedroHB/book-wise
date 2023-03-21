import { styled } from "@/styles/stitches.config";

export const SectionTitleComponent = styled("div", {
  fontSize: "$sm",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$4",

  h3: {
    fontWeight: "$regular",
  },

  a: {
    padding: "$1 $2",
    color: "$purple100",
    borderRadius: "4px",
    fontWeight: "$bold",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "$2",
    transition: "background-color .2s",

    "&:hover": {
      backgroundColor: "rgba(131, 129, 217, 0.06)",
    },
  },
});
