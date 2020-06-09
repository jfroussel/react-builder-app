import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import PanelComponents from "../panelComponents";
import styles from "./styles";

const RightSideBar = (props) => {
  const { classes } = props;
  return (
    <Grid item xs className={classes.rabLayoutRight}>
      <Typography align="center" className="pb-2">
        Components list
      </Typography>
      <PanelComponents />
    </Grid>
  );
};

export default withStyles(styles)(RightSideBar);
