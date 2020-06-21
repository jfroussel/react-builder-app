import React, { useState } from "react";
import { Container, Grid, Input, Button } from "@material-ui/core";
const Home = () => {
  const [state, setState] = useState({
    isSearching: false,
    active: "search",
    movies: [{}, {}],
    query: "",
    
  });
  const handleChange = e => {
      setState({ ...state, isSearching: e.length >0})
      console.log(e)
  }
  const SearchForm = () => {
    return (
      <form>
        <Input
          type="text"
          defaultValue=""
          placeholder="Search..."
          style={{ width: 400 }}
          onChange={ (e) => handleChange(e.target.value) }
        ></Input>
        <Button type="submit" variant="contained" color="primary">
          {" "}
          Go!
        </Button>
      </form>
    );
  };
  return (
    <Container>
      <h1>movies</h1>
      <SearchForm />
    </Container>
  );
};

export default Home;
