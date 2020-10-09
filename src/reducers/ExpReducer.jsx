import BigEval from 'bigeval';

const evaluator = new BigEval();

const exponentConversionRegex = /\^/;
const multiplyConversionRegex = /[Xx]/;

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
    if(state === '') {
      return '';
    }

    let convertedStr = state;

    convertedStr = convertedStr.replace(exponentConversionRegex, '**');
    convertedStr = convertedStr.replace(multiplyConversionRegex, '*');

    return String(evaluator.exec(convertedStr));
  }

  return state;
}

export function expEval() {
  return (dispatch) => {
    dispatch({
      type: 'EVAL',
    });
  };
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

export default ExpReducer;
