import { makeStyles } from "@material-ui/core";
// Note: The styles have to be written in Camel Case with Material UI the name of CSS properties
export default makeStyles((theme) => ({
  // Allows to have the high of my product exact the high of my navbar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));
