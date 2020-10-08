import React from 'react';
import { Grid, Paper } from '@material-ui/core';

function DisplayScreen ({ exp }) {
  let expression;

  if (exp === '') {
    expression = '0';
  } else {
    expression = exp;
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs>
        <Paper style={{
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
              height: 240,
              margin: 5,
              fontSize: 120,
              backgroundColor: 'blue',
        }}>
          {expression}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
