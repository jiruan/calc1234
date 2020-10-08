import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalcButton from './CalcButton';
import EqualButton from './EqualButton';
import CalcButtonSpacer from './CalcButtonSpacer';

function ButtonArray () {
  return (
    <Grid container spacing={1}>
        <CalcButtonSpacer />
        <CalcButton>
          0
        </CalcButton>
        <CalcButton>
          .
        </CalcButton>
        <EqualButton />
    </Grid>
  );
}

export default ButtonArray;
