import { styled } from "@/styles/stitches.config";

export const BooksComponent = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15.625rem, 1fr))",
  gap: "$5",
});
