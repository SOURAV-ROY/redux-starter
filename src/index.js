import {compose, pipe} from 'lodash/fp'

let input = "  JavaScript  ";
// let output = '<h2>' + input.trim() + '</h2>';

const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));
// console.log(result);

// const transformCompose = compose(wrapInDiv, toLowerCase, trim);
// const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
// const transformPipe = pipe(trim, toLowerCase, wrap('span'));
// const transformPipe = pipe(trim, toLowerCase, wrap('div'));
const transformPipe = pipe(trim, toLowerCase, wrap('h1'));

// console.log(transformCompose(input));
console.log(transformPipe(input));


const person = {
    name: 'SOURAV',
    address: {
        country: 'Bangladesh',
        city: 'Dhaka',
    }
};
// const updated = Object.assign({}, person, {name: 'ROY', age: 25});
// const updated = {...person, name: 'Sourav Roy', age: 24};
const updated = {
    ...person,
    address: {
        ...person.address,
        city: 'Rajshahi'
    },
    age: 24
};
console.log(person);
updated.address.city = 'Dinajpur';
console.log(updated);
