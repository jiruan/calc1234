import React from 'react';
import { Container, Divider, Box, makeStyles } from '@material-ui/core';

import TopNav from './components/TopNav';
import DisplayScreen from './components/DisplayScreen';
import ButtonPad from './components/ButtonPad';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2f388c',
  },
});

function App() {
  const styleClass = useStyles();

  // TopNav - holds the top navigation bar
  // DisplayScreen - displays the numbers and results
  // ButtonPad - the calculator's keypad

  return (
    <Container maxWidth='sm'>
      <Box className={styleClass.root}>
        <TopNav />
        <DisplayScreen />
        <Divider />
        <ButtonPad />
      </Box>
    </Container>
  );
}

export default App;
