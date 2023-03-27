import { styled } from "@/styles/stitches.config";

export const SidePanelCardCommentComponent = styled("div", {
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "grid",
  gap: "$5",

  p: {
    color: "$gray300",
    fontSize: "$sm",
  },
});

export const SidePanelCardCommentHeader = styled("div", {
  display: "flex",
  gap: "$4",
});

export const SidePanelCardCommentUser = styled("div", {
  flex: 1,

  h4: {
    lineHeight: "$short",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});
