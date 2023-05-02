import { styled } from "@stitches/react";

export const AuthButtonsContainer = styled("div", {
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
