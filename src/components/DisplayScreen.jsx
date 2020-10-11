import  React from 'react';
import { forwardRef, createRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import { displayScreenHeight } from '../styles/aspectRatioStyle';
import { unset } from '../reducers/ExpReducer';

const originalFontSize = 15; // rather arbitrary
const smallestFontSize = 5;
const fontShrinkRate = 2;

let font_size = originalFontSize; // snake case to avoid confusion with the attribute

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
  const dispatch = useDispatch();
  const styleClass = useStyles();

  const displayRef = createRef(); // reference to digital display
  const shadowRef = createRef();
  
  let expObj = useSelector((state) => state.expr);
  
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

      if(widthIfAppended > displayRef.current.offsetWidth) { // shrinks font size of display will overflow
        if(font_size > smallestFontSize) {
          font_size -= fontShrinkRate;
          dispatch(unset()); // keep updating state and shrink font size until shadowdigitdisplay no longer overflows
        }
      } else if(expObj.shouldResize) { // resets font size when clear or = are pressed
        font_size = originalFontSize;

        dispatch(unset());
      }
    }
  }, [displayRef, shadowRef, expObj, dispatch]); // why I need dispatch? IDK - ESLINT hates not having it

  const expression = (expObj.exp === '') ? '0' : expObj.exp;

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
