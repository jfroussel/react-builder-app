import React, {useEffect, useState} from 'react';
import FirebaseContext from '../../services/firebase'
import {
    withStyles, 
    Container, 
    Grid, 
    Paper, 
    Typography,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
    Button,

} from '@material-ui/core'
import { Visibility, AddCircleOutline, DeleteOutline } from '@material-ui/icons'
import styles from './styles'

const Projects = props => {
    const { classes } = props
    const [projectsList, setProjectsList ] = useState(null)
    const data = FirebaseContext.Firestore.getCollection('projects')
    const [open, setOpen ] = useState(false)
    const [ project, setProject ] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
       getMessageList()

    }, [])

    const getMessageList = () => {
        data.then((d) => {
            setProjectsList(d)
        })
    }

    const handleOpenForm = () => {
        setOpen(true)
    }

    const handleChange = (event) => {
        setProject({...project, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        FirebaseContext.Firestore.addDataInCollection('projects', project)
        setOpen(false)
    }

    const handleDelete = event => {
        FirebaseContext.Firestore.deleteDataInCollection('projects', event.target.id)
    }

    const handleClose = () => {
        setOpen(false);
      };
   
    return (
        <Container className={classes.paperContainer}>
             <Grid container spacing={3}>
                    <Grid item xs={3} align="center" onClick={handleOpenForm}>
                        <Paper className={classes.paper}>
                            <Grid><Typography variant="h5"> Add new project</Typography></Grid>
                            <AddCircleOutline/>
                        </Paper>
                    </Grid>
                 
                 {
                        
                    projectsList &&  projectsList.map((project, index) => {
                        
                         return (
                            <Grid item xs={3} key={index}>
                                <Paper className={classes.paper} align="center">
                                    <Grid><Typography variant="h5">{project.name}</Typography></Grid>
                                    <Typography variant="caption">{project.description}</Typography>
                                    <Grid><Visibility/></Grid>
                                    <Grid> <DeleteOutline id={project.id} onClick={handleDelete}/></Grid>
                                </Paper>
                            </Grid>
                         )
                     })
                   
                 }
             </Grid>
             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <form onSubmit={handleSubmit}>
                <DialogTitle id="form-dialog-title">Add new project</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Project name"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                    
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Save project
                    </Button>
                    </DialogActions>
                    </form>
               
            </Dialog>    
        </Container>
    )
}

export default withStyles(styles)(Projects)