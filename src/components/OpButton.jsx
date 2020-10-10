import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';

import { buttonRadii } from '../styles/aspectRatioStyle';

const widgetRadius = '15vh';
const opKeyColor = '#f8da32';

let opButtonStyle = {
  root: {
    textAlign: 'center',
    backgroundColor: opKeyColor,
  },
  button: {
    fontSize: widgetRadius - 25,
  },
};

opButtonStyle.root = Object.assign(opButtonStyle.root, buttonRadii);
opButtonStyle.button = Object.assign(opButtonStyle.button, buttonRadii);

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
