import React from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';

import { buttonRadii } from '../styles/aspectRatioStyle';

// rgba is only responsible for making it transparent
let spacerStyle = {
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};

// more media queries
spacerStyle.root = Object.assign(spacerStyle.root, buttonRadii);

const useStyle = makeStyles(spacerStyle);

function CalcButtonSpacer () {
  const styleClass = useStyle();

  return (
    <Grid item xl>
      <Paper elevation={0} className={styleClass.root} />
    </Grid>
  );
}

export default CalcButtonSpacer;
