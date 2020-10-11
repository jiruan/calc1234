import  React from 'react';
import { forwardRef, createRef, useEffect } from 'react';
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

  const displayRef = createRef();
  const shadowRef = createRef();

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
  
  const DigitDisplay = forwardRef((props, ref) => (
    <Typography
      ref={ref}
      style={{
        textAlign: 'right',
        fontFamily: 'monospace',
        fontSize: font_size + 'vh',
      }}>
        {props.children}
    </Typography>
  ));

  // bit of a hack to calculate the space taken up by the numbers and operators
  const ShadowDigitDisplay = forwardRef((props, ref) => (
    <Typography
      ref={ref}
      style={{
        textAlign: 'right',
        fontFamily: 'monospace',
        fontSize: font_size + 'vh',
        visibility: 'hidden',
        whiteSpade: 'nowrap',
        height: 0,
      }}>
        {props.children + '0'}
    </Typography>
  ));

  useEffect(() => {
    if(displayRef.current && shadowRef.current) {
      const widthIfAppended = shadowRef.current.scrollWidth;

      if(widthIfAppended > displayRef.current.offsetWidth) {
        if(font_size > 5) {
          font_size -= 2;
        }
      }

      console.log(widthIfAppended, ' : ', displayRef.current.offsetWidth, ' : ', displayRef.current.scrollWidth, ' : ', exp.length, ' : ', font_size);
    }
  }, [displayRef, shadowRef, exp]);

  let expression = exp === '' ? '0' : exp;

  return (
    <Grid container spacing={0}>
      <Grid item xs className={styleClass.root}>
        <ShadowDigitDisplay ref={shadowRef} >
          {expression}
        </ShadowDigitDisplay>
        <DigitDisplay ref={displayRef}>
          {expression}
        </DigitDisplay>
      </Grid>
    </Grid>
  );
}

export default DisplayScreen;
