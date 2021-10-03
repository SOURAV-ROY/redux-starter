import {compose, pipe} from 'lodash/fp'

let input = "  JavaScript  ";
let output = '<h2>' + input.trim() + '</h2>';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

const transformCompose = compose(wrapInDiv, toLowerCase, trim);
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);

console.log(transformCompose(input));
console.log(transformPipe(output));
