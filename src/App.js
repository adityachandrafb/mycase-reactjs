import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {Home, Foriphone, Foripad, Checkout, Detail, Review, Login } from './pages';

const theme = createMuiTheme({
    typography: {
      fontFamily: "Nunito Sans, sans-serif"
    }
  });

const App = () => {
// Pass the theme as a prop to the theme provider
    return (
      <MuiThemeProvider theme={theme}>
          <Router> 
                <Switch>
                    <Route exact path="/"> 
                        <Home />
                    </Route>
                    <Route exact path="/home"> 
                        <Home />
                    </Route>
                    <Route exact path="/foriphone"> 
                        <Foriphone />
                    </Route>
                    <Route exact path="/foripad"> 
                        <Foripad />
                    </Route>
                    <Route exact path="/checkout"> 
                        <Checkout />
                    </Route>
                    <Route exact path="/login"> 
                        <Login />
                    </Route>
                    <Route exact path="/review"> 
                        <Review />
                    </Route>
                    <Route exact path="/detailproduct"> 
                        <Detail />
                    </Route>
                </Switch>
            </Router>
      </MuiThemeProvider>
    )};

export default App;
