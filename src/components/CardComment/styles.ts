import { styled } from "@/styles/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";

export const CardCommentComponent = styled("div", {
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const CardHeader = styled("div", {
  display: "flex",
  gap: "$4",
});

export const CardHeaderUser = styled("div", {
  flex: 1,

  h4: {
    fontWeight: "$regular",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});

export const CardHeaderRating = styled("div", {
  display: "flex",
  gap: "$1",

  svg: {
    color: "$purple100",
  },
});

export const AvatarRoot = styled(Avatar.Root, {
  width: "2.5rem",
  height: "2.5rem",
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
    width: "1.25rem",
    height: "1.25rem",
  },
});

export const CardBody = styled("div", {
  display: "flex",
  gap: "$5",

  img: {
    width: "auto",
    height: "100%",
    objectFit: "cover",
  },
});

export const CardDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",

  div: {
    h4: {
      lineHeight: "$short",
    },

    span: {
      color: "$gray400",
      fontSize: "$sm",
    },
  },

  p: {
    color: "$gray300",
    fontSize: "$sm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 4,

    a: {
      color: "$purple100",
      fontWeight: "$bold",
      textDecoration: "none",
    },
  },
});
