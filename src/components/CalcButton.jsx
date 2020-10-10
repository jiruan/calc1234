import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton, makeStyles } from '@material-ui/core';

const widgetRadius = '15vh';
const numKeyColor = '#A7ABCE';

const useStyle = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: numKeyColor,
    '@media (min-aspect-ratio: 207/448)': {
      height: '15vh',
      width: '15vh',
    },
    '@media (min-aspect-ratio: 9/16)': {
      height: '10vh',
      width: '10vh',
    },
    '@media (min-aspect-ratio: 4/3)': {
      height: '15vh',
      width: '15vh',
    },
     '@media (min-aspect-ratio: 16/9)': {
      height: '8vh',
      width: '8vh',
    },
  },

  button: {
    fontSize: widgetRadius - 25,
    '@media (min-aspect-ratio: 207/448)': {
      height: '15vh',
      width: '15vh',
    },
    '@media (min-aspect-ratio: 9/16)': {
      height: '10vh',
      width: '10vh',
    },
    '@media (min-aspect-ratio: 4/3)': {
      height: '15vh',
      width: '15vh',
    },
    '@media (min-aspect-ratio: 16/9)': {
      height: '8vh',
      width: '8vh',
    }, 
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
