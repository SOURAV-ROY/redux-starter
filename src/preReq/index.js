/***************************************************************************
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
 ***************************************************************************/

/***************************************************************************
 const numbers = [1, 2, 3];

 const index = numbers.indexOf(2);
 const added = [
 ...numbers.slice(0, index),
 4,
 ...numbers.slice(index)
 ]
 //Added number String
 // console.log(`Number Added : ${added}`);
 //Added Number in array
 console.log(added);

 //Remove number
 const removed = numbers.filter(n => n !== 2);
 console.log(removed);

 //Update Number
 const updated = numbers.map(n => n === 2 ? 20 : n)
 console.log(updated);
 ***************************************************************************/
import {Map} from 'immutable';
import {produce} from 'immer';
// Book Object Is Here
// const book = {title: 'Harry Potter'}
let book = Map({title: 'Harry Potter'});
let book2 = {title: 'Braking Bad'};

// Immutable Here is immutable
function publish() {
    // book.isPublished = true;
    return book.set("isPublished", true);
}

// Immer Here is immer
function publish2(book2) {
    return produce(book2, draftBook => {
        draftBook.isPublished = true;
    });
}

book = publish(book);
let updatedBook = publish2(book2);

// console.log(book)
console.log(book2)
// console.log(book.get('title'));
console.log(book.toJS());
console.log(updatedBook);
