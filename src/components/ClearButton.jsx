import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Avatar, IconButton } from '@material-ui/core';

import { clear } from '../reducers/ExpReducer';

function ClearButton () {
  const dispatch = useDispatch();

  return (
    <Grid item xs>
      <Avatar>
        <IconButton onClick={() => {
          dispatch(clear());
        }}>
          C
        </IconButton>
      </Avatar>
    </Grid>
  );
}

export default ClearButton;
