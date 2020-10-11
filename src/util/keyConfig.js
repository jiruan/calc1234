import { append, clear, expEval, pop } from '../reducers/ExpReducer';

// constants for the key type
export const numKey = 1; // this denotes that the key is a digit
export const opKey = 2; // this denotes that the key is an operator
export const spacer = 3; // this denotes no key should exist

// configure the keypad display here
const keyConfig = [
  ['C', '🠔', '/', 'x'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', ' '],
  [' ', '0', '.', '='],
];

// configure the key type here
const keyType = [
  [opKey,  opKey, opKey,  opKey],
  [numKey, numKey, numKey, opKey],
  [numKey, numKey, numKey, opKey],
  [numKey, numKey, numKey, spacer],
  [spacer, numKey, numKey, opKey],
];

// configure the function to execute when the key is pressed here
// spacers need no function and thus has 'null'
const keyFunc = [
  [clear,  pop,   append, append],
  [append, append, append, append],
  [append, append, append, append],
  [append, append, append, null],
  [null,   append, append, expEval],
];

// required for element keys
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

// requires for key array element keys
export const arrKey = keyConfig.map((elem) => (
  elem.toString()
));
