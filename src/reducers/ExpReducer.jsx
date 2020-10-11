import BigEval from 'bigeval';

const evaluator = new BigEval();

const multiplyConversionRegex = /[Xx]/;

function ExpReducer(state = '', action = null) {
  switch (action.type) {
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

    convertedStr = convertedStr.replace(multiplyConversionRegex, '*');

    const evaledExp = String(evaluator.exec(convertedStr));

    return evaledExp === '0' ? '' : evaledExp;
  } else if(action.type === 'APPEND') {
    if(state.length < 10) { // also rather arbitrary; keeps the font from shrinking to illegibility
      return state + action.data;
    } else {
      return state;
    }
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
