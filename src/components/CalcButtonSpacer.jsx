import React from 'react';

import { Paper, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    '@media (min-aspect-ratio: 207/448)': {
      height: '15vh',
      width: '15vh',
    },
    '@media (min-aspect-ratio: 9/16)': {
      height: '10vh',
      width: '10vh',
    },
    '@media (min-aspect-ratio: 4/3)': {
      height: '15vh',
      width: '15vh',
    },
    '@media (min-aspect-ratio: 16/9)': {
      height: '8vh',
      width: '8vh',
    }, 
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

function CalcButtonSpacer () {
  const styleClass = useStyle();

  return (
    <Grid item xl>
      <Paper elevation={0} className={styleClass.root} />
    </Grid>
  );
}

export default CalcButtonSpacer;
