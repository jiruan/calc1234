import React, { useState } from 'react';
import { Typography, Paper, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { getHistory, resetHistory } from '../util/history';

const useStyle = makeStyles({
  root: {
    textAlign: 'center',
    fontSize: '5vh',
    height: '100%',
    color: '#acafd1',
  },
  box: {
    fontSize: '3vh',
    color: '#b8bbdd',
    backgroundColor: '#3f51b5',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  trash: {
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
});

function History () {
  const styleClass = useStyle();
  const [calcHistory, setHistory] = useState(getHistory());
  // only here to trigger re-render when history is wiped

  const wipe = () => {
    resetHistory();
    setHistory([]);
  };

  let histories;
  
  if(calcHistory && Array.isArray(calcHistory)) {
    histories = calcHistory.map(({q, a, t}) => (
      <Paper elevation={1} className={styleClass.box} key={t}>
        {q + ' = ' + a}
      </Paper>
    ));
  }

  return (
    <>
      <Typography className={styleClass.root}>
        History
      </Typography>

      {histories}

      <Paper elevation={1} className={styleClass.box}>
        <Container className={styleClass.trash}>
          <Button onClick={wipe} className={styleClass.button}>
            <DeleteIcon />
          </Button>
        </Container>
      </Paper>
    </>
  );
}

export default History;
