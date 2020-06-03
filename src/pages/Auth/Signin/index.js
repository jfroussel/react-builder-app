import React, { useState, useContext } from 'react';
import { withStyles, Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import { FirebaseContext } from '../../../services/firebase'
import styles from './styles'

const Signin = props => {
    const firebase = useContext(FirebaseContext)
    
    const { classes, history } = props
    const data = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(data)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
   
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = formData
        firebase.signin(email, password)
        .then(user => {
            setFormData({...data})
            history.push('/app')
        })
        .catch(error => {
            setError(error.message)
            setFormData({...data})
        }) 
    }


    const { email, password } = formData

    const submitButton = email === '' || password === '' 
    ?  <Button type="submit" disabled variant="outlined">Sign in</Button> :  <Button type="submit"  variant="outlined">Sign in</Button>

    
    const errorMessage = error !== '' && <span>{error}</span>
    const succesMessage = success !== '' && <span>{success}</span>

    return (
        <Container className={classes.container}>
            <Grid container >
                <Grid item container direction="column" xs>
                    <Typography variant="h5" className="pb-5">Sign in</Typography>
                    <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    id="email"
                                    value={email}
                                    label="Email"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="password"
                                    value={password}
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <br />
                            <div className="pt-5 pb-5">
                                {submitButton}
                            </div>
                            {errorMessage} {succesMessage}
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}


export default withStyles(styles)(Signin)