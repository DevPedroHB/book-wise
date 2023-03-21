import { styled } from "@/styles/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";
import Link from "next/link";

export const SidebarContainer = styled("aside", {
  height: "calc(100vh - 2.5rem)",
  margin: "1.25rem 0 1.25rem 1.25rem",
  padding: "2.5rem 3.25rem 1.5rem",
  backgroundColor: "$gray700",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",

  "& > img": {
    width: "8rem",
    height: "auto",
  },
});

export const SidebarMenu = styled("div", {
  display: "grid",
  gap: "$4",
});

export const SidebarLogin = styled(Link, {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  textDecoration: "none",
  fontWeight: "$bold",
  color: "$gray200",

  svg: {
    color: "$green100",
  },

  variants: {
    authenticated: {
      true: {
        fontWeight: "$regular",

        svg: {
          color: "$red100",
        },
      },
    },
  },
});

export const AvatarRoot = styled(Avatar.Root, {
  width: "2rem",
  height: "2rem",
  borderRadius: "$full",
  display: "inline-block",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",

  svg: {
    width: "1rem",
    height: "1rem",
  },
});
