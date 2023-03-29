import { styled } from "@/styles/stitches.config";

export const ProfileDayListComponent = styled("div", {
  display: "grid",
  gap: "$2",
});

export const ProfileDayListDate = styled("span", {
  color: "$gray300",
  fontSize: "$sm",
});

export const ProfileDayListWrapper = styled("div", {
  display: "grid",
  gap: "$6",
});

export const ProfileDayListCard = styled("div", {
  padding: "1.5rem",
  backgroundColor: "$gray700",
  borderRadius: "8px",
  display: "grid",
  gap: "$6",

  p: {
    color: "$gray300",
    fontSize: "$sm",
  },
});

export const ProfileDayListCardHeader = styled("div", {
  display: "flex",
  gap: "$6",

  img: {
    width: "auto",
    height: "8.375rem",
    objectFit: "cover",
    borderRadius: "4px",
  },
});

export const ProfileDayListBookDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$6",

  h4: {
    lineHeight: "$short",
  },

  span: {
    color: "$gray400",
    fontSize: "$sm",
  },
});
