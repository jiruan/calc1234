import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import ButtonArray from './ButtonArray';
import { arrKey, keyObj } from '../util/keyConfig';

import { keyPadPadding } from '../styles/aspectRatioStyle';

const useStyle = makeStyles({
  root: keyPadPadding,
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
