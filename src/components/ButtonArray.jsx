import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalcButton from './CalcButton';
import CalcButtonSpacer from './CalcButtonSpacer';
import OpButton from './OpButton';
import { spacer, numKey } from '../util/keyConfig';

function ButtonArray ({ context }) {
  const Buttons = context.map((elem) => {
    if(elem.type === spacer) {
      return (
        <CalcButtonSpacer key={elem.order}/>
      );
    } else if(elem.type === numKey) {
      return (
        <CalcButton key={elem.order} func={elem.func}>
          {elem.config}
        </CalcButton>
      );
    } else {
      return (
        <OpButton key={elem.order} func={elem.func}>
          {elem.config}
        </OpButton>
      );
    }
  });

  return (
    <Grid container spacing={1}>
      {Buttons}
    </Grid>
  );
}

export default ButtonArray;
