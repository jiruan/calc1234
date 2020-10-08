import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton } from '@material-ui/core';

import { expEval } from '../reducers/ExpReducer';

function EqualButton () {
  const dispatch = useDispatch();

  return (
    <Grid item xs>
      <Avatar>
        <IconButton onClick={() => {
          dispatch(expEval());
        }}>
          =
        </IconButton>
      </Avatar>
    </Grid>
  );
}

export default EqualButton;
