import { styled } from "@/styles/stitches.config";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarRoot = styled(Avatar.Root, {
  width: "var(--avatar-size)",
  height: "var(--avatar-size)",
  borderRadius: "$full",
  display: "inline-block",
  overflow: "hidden",
  flexShrink: 0,
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
