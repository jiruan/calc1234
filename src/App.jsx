import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Divider, Box } from '@material-ui/core';

import TopNav from './components/TopNav';
import DisplayScreen from './components/DisplayScreen';
import ButtonPad from './components/ButtonPad';

function App() {
  const expr = useSelector((state) => state.expr);

  return (
    <Container maxWidth='sm'>
      <Box style={{backgroundColor: 'blue'}}>
        <TopNav />
        <DisplayScreen exp={expr} />

        <Divider />

        <ButtonPad />
      </Box>
    </Container>
  );
}

export default App;
