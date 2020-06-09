import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import styles from "./styles";

const Content = (props) => {
  const { classes } = props;
  return <Grid item xs={8} className={classes.rabLayoutContent}></Grid>;
};

export default withStyles(styles)(Content);
