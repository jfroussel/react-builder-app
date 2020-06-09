import React, { useEffect, useState, useContext } from "react";
import fb from "firebase";
import { FirebaseContext } from "../../services/Firebase";
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
} from "@material-ui/core";
import {
  Visibility,
  AddCircleOutline,
  DeleteOutline,
} from "@material-ui/icons";
import styles from "./styles";

const Projects = (props) => {
  const { classes } = props;
  const firebase = useContext(FirebaseContext);
  const [projectsList, setProjectsList] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const user = firebase.user();

  const [project, setProject] = useState({
    uid: "",
    name: "",
    description: "",
  });

  //const data = firebase.getCollection("projects", "N87ILwP6CDO48eXL1aRyBxxcJ0U2");

  useEffect(() => {
    getProjectsList();
  }, []);

  const getProjectsList = () => {
    const uid = "N87ILwP6CDO48eXL1aRyBxxcJ0U2"
    firebase.getCollection("projects", uid).then((d) => {
        setProjectsList(d);
      });
    
  };

  const handleOpenForm = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setProject({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { uid } = user;
    firebase.addDataInCollection("projects", { ...project, uid });
    setOpen(false);
  };

  const handleDelete = (event) => {
    setOpenAlert(true);
    handleSubmitDelete(event.target.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitDelete = (projectId) => {
    firebase.deleteDataInCollection("projects", projectId);
  };

  return (
    <Container className={classes.paperContainer}>
      <Grid container spacing={3}>
        <Grid item xs={3} align="center" onClick={handleOpenForm}>
          <Paper className={classes.paper}>
            <Grid>
              <Typography variant="h5"> Add new project</Typography>
            </Grid>
            <AddCircleOutline />
          </Paper>
        </Grid>

        {projectsList &&
          projectsList.map((project, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Paper className={classes.paper} align="center">
                  <Grid>
                    <Typography variant="h5">{project.name}</Typography>
                  </Grid>
                  <Typography variant="caption">
                    {project.description}
                  </Typography>
                  <Grid>
                    <Visibility />
                  </Grid>
                  <Grid>
                    {" "}
                    <DeleteOutline id={project.id} onClick={handleDelete} />
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
      <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmitDelete}>
          <DialogTitle id="form-dialog-title">Delete element</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this element ?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAlert(false)} color="primary">
              No
            </Button>
            <Button type="submit" color="primary">
              Yes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default withStyles(styles)(Projects);
