import { styled } from "@/styles/stitches.config";

export const CommentFormComponent = styled("div", {
  padding: "$6",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "grid",
  gap: "$6",
});

export const CommentFormHeader = styled("div", {
  display: "flex",
  gap: "$4",

  h4: {
    flex: 1,
    margin: "auto 0",
    lineHeight: "$short",
  },
});

export const CommentFormWrapper = styled("form", {
  display: "grid",
  gap: "$3",
  position: "relative",

  textarea: {
    width: "100%",
    height: "10.25rem",
    padding: ".875rem 1.25rem",
    backgroundColor: "$gray800",
    color: "$gray200",
    border: "1px solid $gray500",
    outline: 0,
    borderRadius: "8px",
    resize: "none",

    "&::placeholder": {
      color: "$gray400",
    },

    "&:focus": {
      borderColor: "$green200",
    },

    "&:hover": {
      borderColor: "$green200",
    },
  },

  span: {
    position: "absolute",
    bottom: "3.125rem",
    right: ".5rem",
    color: "$gray400",
    fontSize: "$xs",
  },

  variants: {
    error: {
      true: {
        span: {
          color: "$red100",
        },
      },
    },
  },
});

export const CommentFormAction = styled("div", {
  display: "flex",
  justifyContent: "end",
  gap: "$2",

  button: {
    padding: "$2",
    backgroundColor: "$gray600",
    border: 0,
    borderRadius: "4px",
    lineHeight: 0,
    transition: "background-color .2s",

    "&:hover": {
      backgroundColor: "$gray500",
    },
  },
});
