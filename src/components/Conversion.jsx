import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    display: 'flex',
  },
  type: {
    justifyContent: 'center',
    paddingLeft: '10vh',
    paddingRight: '10vh',
    color: '#acafd1',
    textAlign: 'center',
  },
});

const typeOptions = [
  'length',
  'mass',
];

function Conversion() {
  const styleClass = useStyle();
  const [ type, setType ] = useState('length');

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const typeMenuItems = typeOptions.map((elem, index) => (
    <MenuItem value={index}>{elem}</MenuItem>
  ));

  return (
    <>
      <FormControl className={styleClass.root}>
        <Container maxWidth='sm'>
          <InputLabel>
            Type
          </InputLabel>
        </Container>

        <Container maxWidth='sm'>
          <Select
            value={type}
            onChange={typeChangeHandler}
          >
            {typeMenuItems}
          </Select>
        </Container>
      </FormControl>
    </>
  );
}

export default Conversion;
