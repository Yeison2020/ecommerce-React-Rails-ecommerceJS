import { makeStyles } from "@material-ui/core/styles";
// Note: The styles have to be written in Camel Case with Material UI the name of CSS properties
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#C8F2EF",
  },
  media: {
    height: 0,
    paddingTop: "57%",
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
