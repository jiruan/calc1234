import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';

const widgetRadius = 100;
const opKeyColor = '#f8da32';

const useStyle = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: opKeyColor,
    height: widgetRadius,
    width: widgetRadius,
  },

  button: {
    fontSize: widgetRadius - 25,
    height: widgetRadius,
    width: widgetRadius,
  },
});

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
