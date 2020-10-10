import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';

import { buttonRadii, keyFontSize } from '../styles/aspectRatioStyle';

const numKeyColor = '#A7ABCE';

let calcButtonStyle = {
  root: {
    textAlign: 'center',
    backgroundColor: numKeyColor,
  },

  button: {
  },
};

calcButtonStyle.root = Object.assign(calcButtonStyle.root, buttonRadii);
calcButtonStyle.button = Object.assign(calcButtonStyle.button, buttonRadii);
calcButtonStyle.button = Object.assign(calcButtonStyle.button, keyFontSize);

const useStyle = makeStyles(calcButtonStyle);

function CalcButton ({ children, func }) {

  const styleClass = useStyle();
  const dispatch = useDispatch();

  return (
    <Grid item xl>
      <Avatar className={styleClass.root}>
        <IconButton className={styleClass.button} onClick={() => {
          dispatch(func(children));
        }}>
          {children}
        </IconButton>
      </Avatar>
    </Grid>
  );
}

export default CalcButton;
