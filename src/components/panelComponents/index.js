import React from 'react';
import { withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Tooltip } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { items } from '../dataFixtures'
import styles from './styles'
import '../../media/images/layout-icons/font/flaticon.css'

const PanelComponent = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
        {
            items.map((item, i) => {
                return (
                    <ExpansionPanel key={i}>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>{item.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                {
                                    item.types.map( (t, index) => {
                                        return (
                                            <Grid key={index} item xs={2} className={classes.iconComponent}>
                                                <Tooltip TransitionComponent={Zoom} placement="top" title={t} arrow>
                                                    <div className={`glyph-icon flaticon-${t}`} style={{color: "#fff"}}></div>
                                                </Tooltip>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })
        }
    </div>
  );
}

export default withStyles(styles)(PanelComponent)