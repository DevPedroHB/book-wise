import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const SidebarLinkComponent = styled(Link, {
  padding: "$2 0",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  textDecoration: "none",
  color: "$gray400",
  transition: "color .2s",
  position: "relative",

  "&:hover": {
    color: "$gray100",
  },

  variants: {
    active: {
      true: {
        fontWeight: "$bold",
        color: "$gray100",

        "&::before": {
          content: "",
          width: ".25rem",
          height: "1.5rem",
          background: "$gradient-vertical",
          borderRadius: "$full",
          position: "absolute",
          left: -20,
        },
      },
    },
  },
});
