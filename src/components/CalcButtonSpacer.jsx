import React from 'react';

import { Paper, Grid, makeStyles } from '@material-ui/core';

const widgetRadius = 100;

const useStyle = makeStyles({
  root: {
    height: widgetRadius,
    width: widgetRadius,
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
