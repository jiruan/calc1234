import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import ButtonArray from './ButtonArray';
import { arrKey, keyObj } from '../util/keyConfig';

const useStyle = makeStyles({
  root: {
    padding: '4vw',
  },
});

function ButtonPad () {
  const styleClass = useStyle();

  const keyPad = keyObj.map((keyArray, index) => {
    return <ButtonArray context={keyArray} key={arrKey[index]} />
  });

  return (
    <Container maxWidth='sm' className={styleClass.root}>
      {keyPad}
    </Container>
  );
}

export default ButtonPad;
