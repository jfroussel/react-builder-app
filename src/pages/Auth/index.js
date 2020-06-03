import React from 'react';
import { withStyles, Container, Grid } from '@material-ui/core'
import Signup from './Signup'
import Signin from './Signin'
import styles from './styles'

const Auth = props => {
    const { classes, history } = props
    return (
        <Container className={classes.container}>
            <Grid container >
                <Grid item container direction="column" xs={6} align="center" style={{borderRight: "solid 1px rgb(117, 116, 116)"}}>
                   <Signup/>  
                </Grid>
                <Grid item container direction="column" align="center" xs={6}  style={{}}>
                    <Signin history={history}/>
                </Grid>
            </Grid>
        </Container>
    )
}


export default withStyles(styles)(Auth)