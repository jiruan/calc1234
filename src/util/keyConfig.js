import { append, clear, expEval } from '../reducers/ExpReducer';

export const numKey = 1;
export const opKey = 2;
export const spacer = 3;

const keyConfig = [
  ['C', ' ', '/', 'x'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '^'],
  [' ', '0', '.', '='],
];

const keyType = [
  [opKey,  spacer, opKey,  opKey],
  [numKey, numKey, numKey, opKey],
  [numKey, numKey, numKey, opKey],
  [numKey, numKey, numKey, opKey],
  [spacer, numKey, numKey, opKey],
];

const keyFunc = [
  [clear,  null,   append, append],
  [append, append, append, append],
  [append, append, append, append],
  [append, append, append, append],
  [null,   append, append, expEval],
];

const keyOrder = keyConfig.map((arr, index1) => (
  arr.map((_, index2, cont) => (
    'button' + (index1 * cont.length + index2).toString())
)));

export const keyObj = keyConfig.map((arr, index1) => (
  arr.map((conf, index2) => ({
    config: conf,
    order: keyOrder[index1][index2],
    type: keyType[index1][index2],
    func: keyFunc[index1][index2],
  }))
));

export const arrKey = keyConfig.map((elem) => (
  elem.toString()
));
