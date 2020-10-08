import React from 'react';

import TopButtonArray from './TopButtonArray';
import MidButtonArray from './MidButtonArray';
import BottomButtonArray from './BottomButtonArray';

function ButtonPad () {
  return (
    <>
      <TopButtonArray />

      <MidButtonArray symbols={['7', '8', '9', '-']} />
      <MidButtonArray symbols={['4', '5', '6', '+']} />
      <MidButtonArray symbols={['1', '2', '3', '^']} />

      <BottomButtonArray />
    </>
  );
}

export default ButtonPad;
