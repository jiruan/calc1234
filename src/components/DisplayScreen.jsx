import  React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, makeStyles } from '@material-ui/core';

let font_size = 120;

let useStyles = makeStyles({
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    height: 240,
    color: '#acafd1',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: 75,
    marginLeft: 75,
  },
});

function DisplayScreen () {
  let exp = useSelector((state) => state.expr);
  const styleClass = useStyles();

  // this rescales the font based on the length of the expression
  // this is a rather arbitrary font scaling algorithm
  if(exp.length > 5) {
    if(font_size > 75) {
      font_size = 120 - (exp.length-5) * 15;
    } else if(font_size > 40) {
      font_size = 60 - (exp.length - 10) * 4;
    }
  } else {
    font_size = 120;
  }

  let expression = exp === '' ? '0' : exp;

  return (
    <Grid container spacing={0}>
      <Grid item xs className={styleClass.root}>
        <Typography
          style={{
            fontSize: font_size,
            textAlign: 'right',
          }}>
            {expression}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
