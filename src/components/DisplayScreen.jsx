import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

let font_size = 160;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 240,
    fontSize: font_size,
    color: '#acafd1',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'right',
    marginRight: 75,
    marginLeft: 75,
  },
});

function DisplayScreen ({ exp }) {
  const styleClass = useStyles();

  let expression;

  if (exp === '') {
    expression = '0';
  } else {
    expression = exp;
  }

  const display = (
    <span>
      {expression}
    </span>
  );

  return (
    <Grid container spacing={0}>
      <Grid item xs className={styleClass.root}>
        {display}
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
