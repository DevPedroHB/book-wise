import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const LoginModalDialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 3,
});

export const LoginModalDialogTitle = styled(Dialog.Title, {
  marginBottom: "$10",
  color: "$gray200",
  fontSize: "1rem",
  lineHeight: "$short",
  textAlign: "center",
});

export const LoginModalDialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: "1rem",
  right: "1rem",
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

export const LoginModalDialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "32.25rem",
  width: "100%",
  padding: "3.5rem 4.5rem",
  backgroundColor: "$gray700",
  color: "$gray100",
  borderRadius: "12px",
  boxShadow: "4px 16px 24px rgba(0, 0, 0, 0.25)",
  zIndex: 4,
});

export const LoginModalOptions = styled("div", {
  display: "grid",
  gap: "$4",

  button: {
    padding: "$5 $6",
    backgroundColor: "$gray600",
    color: "$gray200",
    border: 0,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "$5",
    fontWeight: "$bold",
    fontSize: "$lg",

    img: {
      width: "2rem",
      height: "auto",
    },
  },
});
