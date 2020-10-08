import React from 'react';

import { Paper, Grid } from '@material-ui/core';

function CalcButtonSpacer () {
  return (
    <Grid item xs>
      <Paper elevation={0} />
    </Grid>
  );
}

export default CalcButtonSpacer;
