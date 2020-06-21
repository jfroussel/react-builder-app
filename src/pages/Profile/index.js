import React, { useContext, useState, useEffect } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import { FirebaseContext } from "../../services/Firebase";
import styles from "./styles";

const Profile = (props) => {
  const firebase = useContext(FirebaseContext);
  const [projectsList, setProjectsList] = useState(null);
  const user = firebase.user();

  useEffect(() => {
    if (user) {
      firebase.getCollection("projects", user.uid).then((d) => {
        setProjectsList(d);
      });
    }
  }, []);

  return (
    <div style={{ color: "#ffffff" }}>
      {console.log("PL", projectsList)}
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <h3>Your profile</h3>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {projectsList &&
                projectsList.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Profile);
