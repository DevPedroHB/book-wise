import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const SidePanelDialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 20,
});

export const SidePanelDialogTitle = styled(Dialog.Title, {
  padding: "$6 $8 $4",
  backgroundColor: "$gray700",
  borderRadius: "10px",
  display: "grid",
  gap: "$10",

  span: {
    color: "$gray300",
    fontWeight: "$regular",
    fontSize: "$md",
    lineHeight: "$base",
  },
});

export const SidePanelBook = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$8",

  img: {
    width: "auto",
    height: "15.125rem",
    objectFit: "cover",
    borderRadius: "10px",
  },
});

export const SidePanelInfo = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$2",

  h4: {
    fontSize: "$lg",
    lineHeight: "$short",
  },

  small: {
    marginTop: "$1",
    color: "$gray400",
    fontWeight: "$regular",
    fontSize: "$sm",
    lineHeight: "$base",
  },
});

export const SidePanelAbout = styled("div", {
  padding: "$6 0",
  borderTop: "1px solid $gray600",
  display: "flex",
  flexWrap: "wrap",
  gap: "3.5rem",

  "& > div": {
    padding: "0 $1",
    display: "flex",
    alignItems: "center",
    gap: "$4",

    svg: {
      color: "$green100",
    },

    p: {
      fontWeight: "$bold",
      fontSize: "$md",
      lineHeight: "$short",
    },
  },
});

export const SidePanelDialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: "1.5rem",
  right: "3rem",
  padding: "$2",
  backgroundColor: "transparent",
  border: 0,
  borderRadius: "4px",
  lineHeight: 0,
  transition: "background-color .2s",

  svg: {
    color: "$purple100",
  },

  "&:hover": {
    backgroundColor: "$gray500",
  },
});

export const SidePanelDialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  maxWidth: "41.25rem",
  width: "100%",
  height: "100vh",
  padding: "4rem 3rem",
  backgroundColor: "$gray800",
  color: "$gray100",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.5)",
  overflowY: "scroll",
  zIndex: 30,
});

export const SidePanelTitle = styled("div", {
  margin: "$10 0 $4 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  span: {
    color: "$gray200",
    fontSize: "$sm",
  },

  button: {
    padding: "$1 $2",
    backgroundColor: "transparent",
    color: "$purple100",
    border: 0,
    borderRadius: "4px",
    fontWeight: "$bold",
    transition: "background-color .2s",

    "&:hover": {
      backgroundColor: "rgba(131, 129, 217, 0.06)",
    },
  },

  variants: {
    newFormComment: {
      true: {
        button: {
          display: "none",
        },
      },
    },
  },
});

export const SidePanelComments = styled("div", {
  display: "grid",
  gap: "$3",
});
