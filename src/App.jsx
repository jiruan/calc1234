import React from 'react';
import { useSelector } from 'react-redux';
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
  const expr = useSelector((state) => state.expr);

  return (
    <Container maxWidth='sm'>
      <Box className={styleClass.root}>
        <TopNav />
        <DisplayScreen exp={expr} />

        <Divider />

        <ButtonPad />
      </Box>
    </Container>
  );
}

export default App;
