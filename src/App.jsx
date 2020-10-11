import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Divider, Box, makeStyles } from '@material-ui/core';

import TopNav from './components/TopNav';
import DisplayScreen from './components/DisplayScreen';
import ButtonPad from './components/ButtonPad';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2f388c',
  },
  about: {
    fontSize: '5vh',
    height: '100%',
    color: '#acafd1',
  },
});

function App() {
  const styleClass = useStyles();

  return (
    <Router>
      <Container maxWidth='sm'>
        <Box className={styleClass.root}>
          <TopNav />
          <Switch>

            {/**
              NOTE: Just a simple explanation should suffice
            */}
            <Route path='/about'>
              <p className={styleClass.about}>
                This is Jimmy Ruan's submission to the Front End Developer Challenge.
                It is a basic calculator app.
              </p>
            </Route>

            {/**  
              TopNav - holds the top navigation bar
              DisplayScreen - displays the numbers and results
              ButtonPad - the calculator's keypad
            */}
            <Route path='/'>
              <DisplayScreen />
              <Divider />
              <ButtonPad />
            </Route>

          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
