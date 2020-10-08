import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalcButton from './CalcButton';

function MidButtonArray ({ symbols }) {
  const Buttons = symbols.map((sym) => (
    <CalcButton key={sym}>
      {sym}
    </CalcButton>
  ));

  return (
    <Grid container spacing={1}>
      {Buttons}
    </Grid>
  );
}

export default MidButtonArray;
