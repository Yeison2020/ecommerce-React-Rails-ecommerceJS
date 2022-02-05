import { makeStyles } from "@material-ui/core/styles";
// Note: The styles have to be written in Camel Case with Material UI the name of CSS properties
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#FFF8F3",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
