import  React from 'react';
import { forwardRef, createRef } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import { displayScreenHeight } from '../styles/aspectRatioStyle';

let font_size = 15;

let displayStyle = {
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    height: '25vh',
    color: '#acafd1',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: '6vw',
    marginLeft: '6vw',
  },
};

displayStyle.root = Object.assign(displayStyle.root, displayScreenHeight);

const useStyles = makeStyles(displayStyle);

function DisplayScreen () {
  let exp = useSelector((state) => state.expr);
  const styleClass = useStyles();

  // this rescales the font based on the length of the expression
  // this is a rather arbitrary font scaling algorithm
  /**
  if(exp.length > 5) {
    if(font_size > 75) {
      font_size -= 15;
    } else if(font_size > 40) {
      font_size -= 4;
    }
  } else {
    font_size = 15;
  }
  */

  if(exp.length > 5) {
    console.log(font_size);
    font_size = 15 - (exp.length - 5) / 5;
  } else {
    font_size = 15;
  }

  let expression = exp === '' ? '0' : exp;

  return (
    <Grid container spacing={0}>
      <Grid item xs className={styleClass.root}>
        <Typography
          style={{
            textAlign: 'right',
            fontFamily: 'monospace',
            fontSize: font_size + 'vh',
          }}>
            {expression}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
