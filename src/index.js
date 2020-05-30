import { CssBaseline, Container, Grid } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import theme from './services/theme'
import Navbar from './components/navbar'
import React from 'react';
import { Router, Route } from 'react-router-dom'
import history from './services/history'
import ReactDOM from 'react-dom';
import { routes } from './services/router';
import Firebase, { FirebaseContext } from './services/firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={ new Firebase() }>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router history={history}>
           {
               routes.map((route, index) => {
                   console.log(route)
                   const { componentToRender: Component} = route
                   return (
                       <Route 
                            {...route} 
                            key={index}
                            render={
                                routeProps => (
                                    <Container disableGutters={true} maxWidth={"xl"}>
                                        <Grid container>
                                            <Navbar />
                                        </Grid>
                                        <Grid container direction="row">
                                            <Component {...routeProps}/>
                                        </Grid>
                                    </Container>
                                )
                            }
                        />
                   )
               })
           }
        </Router>  
    </ThemeProvider>
    </FirebaseContext.Provider>,
 
  document.getElementById('root')
);

