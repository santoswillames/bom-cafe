import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  height: 560,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$orange500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$orange300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "$gray800",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  marginTop: "4rem",

  img: {
    objectFit: "cover",
  },
});
