import React from "react";
import { Container, Grid } from "@material-ui/core";
import LeftSideBar from "../../components/layout/leftSideBar";
import RightSideBar from "../../components/layout/rightSideBar";
import Content from "../../components/layout/content";

const App = (props) => {
  const projectID = props.match.params.id;
  return (
    <Container disableGutters={true} maxWidth={"xl"}>
      <Grid container direction="row">
        <LeftSideBar />
        <Content />
        <RightSideBar />
      </Grid>
    </Container>
  );
};

export default App;
