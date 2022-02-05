import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
    padding: theme.spacing(7),
  },
  root: {
    flexGrow: 1,
  },
}));
