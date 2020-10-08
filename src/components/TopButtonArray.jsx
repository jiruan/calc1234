import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalcButton from './CalcButton';
import ClearButton from './ClearButton';
import CalcButtonSpacer from './CalcButtonSpacer';

function TopButtonArray ({ SymbolArray }) {
  return (
    <Grid container spacing={1}>
        <ClearButton />
        <CalcButtonSpacer />
        <CalcButton>
          /
        </CalcButton>
        <CalcButton>
          X
        </CalcButton>
    </Grid>
  );
}

export default TopButtonArray;
