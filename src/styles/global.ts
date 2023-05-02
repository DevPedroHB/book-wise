import { nunito } from "@/pages/_app.page";
import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    "::-webkit-scrollbar": {
      width: ".375rem",
      height: ".375rem",
      backgroundColor: "$gray700",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$gray600",
      borderRadius: ".5rem",
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: "$gray500",
    },
  },

  html: {
    fontFamily: nunito.style.fontFamily,
    scrollBehavior: "smooth",

    "@bp3": {
      fontSize: "97.5%",
    },
    "@bp2": {
      fontSize: "87.5%",
    },
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "inherit",
    fontWeight: 400,
    fontSize: "$md",
    lineHeight: "$base",
  },

  button: {
    cursor: "pointer",
  },
});
