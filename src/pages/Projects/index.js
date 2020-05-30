
import React from 'react';
import {withStyles, Container, Grid, Paper, Typography} from '@material-ui/core'
import { Visibility, AddCircleOutline } from '@material-ui/icons'
import { projects } from '../../components/dataFixtures.js'
import styles from './styles'


const Projects = props => {
    const { classes } = props
    
    return (
        <Container className={classes.paperContainer}>
             <Grid container spacing={3}>
                    <Grid item xs={3} align="center">
                        <Paper className={classes.paper}>
                            <Grid><Typography variant="h5"> Add new project</Typography></Grid>
                            <AddCircleOutline/>
                        </Paper>
                        
                    </Grid>
                 {
                     projects.map(project => {
                         return (
                            <Grid item xs={3} key={project.id}>
                                <Paper className={classes.paper} align="center">
                                    <Grid><Typography variant="h5">{project.name}</Typography></Grid>
                                    <Typography variant="caption">{project.description}</Typography>
                                    <Grid><Visibility/></Grid>
                                </Paper>
                            </Grid>
                         )
                     })
                 }
             </Grid>
        </Container>
    )
}

export default withStyles(styles)(Projects)