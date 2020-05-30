import React from 'react';
import { withStyles, Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import styles from './styles'

const Auth = props => {
    const { classes } = props
    return (
        <Container className={classes.container}>
            <Grid container >
                <Grid container direction="column" xs={6}>
                    <Typography variant="h5">Register</Typography>
                    <form  noValidate autoComplete="off">
                       
                            <div>
                            <TextField
                                id="email"
                                label="Email"
                                type="text"
                            />
                            </div>
                            <div>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="passwordConfirm"
                                    label="Confirm Password"
                                    type="password"
                                />
                            </div>
                            <br />
                            <div>
                                <Button variant="outlined">Register</Button>
                            </div>
                           
                       
                   

                    </form>
                </Grid>
                <Grid container direction="column" xs={6}>
                    <Typography variant="h5">Sign in</Typography>
                    <form  noValidate autoComplete="off">
                        <div>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                        />
                        </div>
                        <div>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                            />
                        </div>
                        <br />
                        <div>
                            <Button variant="outlined">Sign in</Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}


export default withStyles(styles)(Auth)