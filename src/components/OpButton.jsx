import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';

import { buttonRadii, keyFontSize } from '../styles/aspectRatioStyle';

const opKeyColor = '#f8da32';

let opButtonStyle = {
  root: {
    textAlign: 'center',
    backgroundColor: opKeyColor,
  },
  button: {
  },
};

opButtonStyle.root = Object.assign(opButtonStyle.root, buttonRadii);
opButtonStyle.button = Object.assign(opButtonStyle.button, buttonRadii);
opButtonStyle.button = Object.assign(opButtonStyle.button, keyFontSize);

const useStyle = makeStyles(opButtonStyle);

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
