/**
 * History format {
 *  q: the expression
 *  a: the result
 *  t: the timestamp the evaluation is made; used as keys mainly
 * }
*/

const maxHistoryEntry = 10;

export function addHistory(expr, res) {
  const newEntry = {
    q: expr,
    a: res === '' ? '0' : res,
    t: (new Date()).getTime(),
  };

  let pastHistory = JSON.parse(window.localStorage.getItem('history'));

  if(pastHistory.length === 0) { // history is empty; just add the new entry in
    pastHistory = pastHistory.concat(newEntry);
  } else {
    const { a, q } = pastHistory[pastHistory.length - 1];

    if(a !== res || q !== expr) {
      // ensures that there is no consecutive duplicate entries
      if(pastHistory.length >= maxHistoryEntry) {
        pastHistory = pastHistory.slice(1, maxHistoryEntry);
        // limit the number of entries for history
      }

      pastHistory = pastHistory.concat(newEntry);
    }
  }

  window.localStorage.setItem('history', JSON.stringify(pastHistory));
}

export function getHistory() {
  return JSON.parse(window.localStorage.getItem('history'));
}

export function resetHistory() {
  window.localStorage.setItem('history', JSON.stringify([]));
}
