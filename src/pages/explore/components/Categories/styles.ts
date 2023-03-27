import { styled } from "@/styles/stitches.config";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: ".75rem",
  marginBottom: "3rem",
});

export const ToggleGroupItem = styled(ToggleGroup.Item, {
  padding: ".25rem 1rem",
  backgroundColor: "transparent",
  color: "$purple100",
  border: "1px solid",
  borderColor: "$purple100",
  borderRadius: "$full",
  transition: "all .2s",

  "&[data-state=on]": {
    backgroundColor: "$purple200",
    color: "$gray100",
    borderColor: "$purple200",
  },

  "&:hover": {
    backgroundColor: "$purple200",
    color: "$gray100",
  },
});
