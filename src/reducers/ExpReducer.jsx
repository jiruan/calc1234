import BigEval from 'bigeval'; // https://www.npmjs.com/package/bigeval

const evaluator = new BigEval();

const multiplyConversionRegex = /[Xx]/g; // matches for 'X' and 'x'; used to convert 'x' to '*'

// exp: holds the expression itself
// shouldResize: signals whether or not to resize the font
const initState = {
  exp: '',
  shouldResize: false,
}

function ExpReducer(state = initState, action = null) {
  switch (action.type) {
    case 'POP':
      return {
        exp: state.exp.slice(0, state.exp.length - 1),
        shouldResize: true,
      };
    case 'UNSET':
      return {
        exp: state.exp,
        shouldResize: false,
      };
    case 'CLEAR':
      return {
        exp: '',
        shouldResize: true,
      };
    default:
      break;
  }

  if(action.type === 'EVAL') {
    if(state.exp === '') {
      return {
        exp: '',
        shouldResize: false,
      };
    }

    let convertedStr = state.exp;

    convertedStr = convertedStr.replace(multiplyConversionRegex, '*');

    console.log(convertedStr);

    let evaledExp = String(evaluator.exec(convertedStr));
    evaledExp = evaledExp === '0' ? '' : evaledExp;

    return {
      exp: evaledExp,
      shouldResize: true,
    };
  } else if(action.type === 'APPEND') {
    if(state.exp.length < 10) { // also rather arbitrary; keeps the font from shrinking to illegibility
      return { 
        exp: state.exp + action.data,
        shouldResize: false,
      };
    } else {
      return {
        exp: state.exp,
        shouldResize: false,
      };
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

export function unset() {
  return (dispatch) => {
    dispatch({
      type: 'UNSET',
    });
  };
}

export function pop() {
  return (dispatch) => {
    dispatch({
      type: 'POP',
    });
  };
}

export default ExpReducer;
