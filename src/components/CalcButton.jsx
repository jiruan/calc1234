import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton } from '@material-ui/core';

import { append } from '../reducers/ExpReducer';

function CalcButton ({ children }) {
  const dispatch = useDispatch();

  return (
    <Grid item xs>
      <Avatar>
        <IconButton onClick={() => {
          dispatch(append(children));
        }}>
          {children}
        </IconButton>
      </Avatar>
    </Grid>
  );
}

export default CalcButton;
