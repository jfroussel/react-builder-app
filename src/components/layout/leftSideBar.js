import React from 'react';
import { withStyles, Grid } from '@material-ui/core'
import styles from './styles'

const LeftSideBar = props => {
    const { classes } = props
    return ( <Grid item xs className={classes.rabLayoutLeft}></Grid>)
}

export default withStyles(styles)(LeftSideBar)