import  React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, makeStyles } from '@material-ui/core';

let useStyles = makeStyles({
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    height: '30vh',
    color: '#acafd1',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: '6vw',
    marginLeft: '6vw',
  },
});

// calculated using https://websemantics.uk/tools/responsive-font-calculator/
/**
@media (min-width: 360px) {
  :root {
    font-size: calc(2.5rem + (120 - 40) * ((100vw - 360px) / (1920 - 360)));
    min-height: 0vw;
  }
}
@media (min-width: 1920px) {
  :root {
    font-size: 120px;
  }
}
 */

function DisplayScreen () {
  let exp = useSelector((state) => state.expr);
  const styleClass = useStyles();

  /*
  // this rescales the font based on the length of the expression
  // this is a rather arbitrary font scaling algorithm
  if(exp.length > 5) {
    if(font_size > 75) {
      font_size -= 15;
    } else if(font_size > 40) {
      font_size = 60 - (exp.length - 10) * 4;
    }
  } else {
    font_size = 100;
  }
  */

  let expression = exp === '' ? '0' : exp;

  return (
    <Grid container spacing={0}>
      <Grid item xs className={styleClass.root}>
        <Typography
          style={{
            textAlign: 'right',
            fontFamily: 'monospace',
            fontSize: '10vw',
          }}>
            {expression}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
