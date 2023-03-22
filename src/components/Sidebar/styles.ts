import { styled } from "@/styles/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";
import Link from "next/link";

export const SidebarContainer = styled("aside", {
  maxWidth: "14.5rem",
  height: "calc(100vh - 2.5rem)",
  margin: "1.25rem 0 1.25rem 1.25rem",
  padding: "2.5rem 3.25rem 1.5rem",
  backgroundColor: "$gray700",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  position: "relative",

  "& > img": {
    width: "8rem",
    height: "auto",
  },

  "@bp2": {
    padding: "1.25rem 1.625rem .75rem",
    position: "fixed",
  },

  variants: {
    toggle: {
      false: {
        "& > img": {
          width: "1.5rem",
          height: "auto",
        },
      },
    },
  },
});

export const SidebarButtonToggle = styled("button", {
  position: "absolute",
  right: "-.75rem",
  padding: "$1",
  backgroundColor: "rgba(131, 129, 217, 0.25)",
  border: 0,
  borderRadius: "$full",
  lineHeight: 0,

  svg: {
    color: "$purple100",
    transition: "transform .2s",
  },

  variants: {
    toggle: {
      true: {
        svg: {
          transform: "rotate(-180deg)",
        },
      },
    },
  },
});

export const SidebarMenu = styled("div", {
  display: "grid",
  gap: "$4",

  variants: {
    toggle: {
      false: {
        span: {
          display: "none",
        },
      },
    },
  },
});

export const SidebarLogin = styled(Link, {
  marginTop: "auto",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "$3",
  textDecoration: "none",
  fontWeight: "$bold",
  color: "$gray200",

  div: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    placeItems: "center",
    gap: "$3",

    span: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 1,
    },
  },

  svg: {
    margin: "0 auto",
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

    toggle: {
      false: {
        span: {
          display: "none",
        },

        div: {
          display: "none",
        },
      },
    },
  },
});

export const AvatarRoot = styled(Avatar.Root, {
  width: "2rem !important",
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
