import BigEval from 'bigeval';

const evaluator = new BigEval();
const exponentConversionRegex = /\^/;

function ExpReducer(state = '', action = null) {
  switch (action.type) {
    case 'APPEND':
      return state + action.data;
    case 'CLEAR':
      return '';
    default:
      break;
  }

  if(action.type === 'EVAL') {
    let convertedStr = state.replace(exponentConversionRegex, '**');

    return evaluator.exec(convertedStr);
  }

  return state;
}

export function append(symbol) {
  return (dispatch) => {
    dispatch({
      type: 'APPEND',
      data: symbol,
    });
  };
} 

export function clear() {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR',
    });
  };
}

export function expEval() {
  return (dispatch) => {
    dispatch({
      type: 'EVAL',
    });
  };
}

export default ExpReducer;
