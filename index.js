var _ = require('lodash')


// Curried functions are easy to compose.
// Using _.map, _.size, and _.split we can
// make a function that returns the lengths
// of the words in a string.

var split = function (word) {
  return _.split(word, ' ')

}

var countLength = function (value) {
  return _.map(value, _.size)
}
var flows = _.flow(split, countLength)

console.log(flows('once time in California'))


/*******************************************
               Y O U R  T U R N
********************************************/
var articles = [
{
  title: 'Everything Sucks',
  url: 'http://do.wn/sucks.html',
  author: {
    name: 'Debbie Downer',
    email: 'debbie@do.wn'
  }
},
{
  title: 'If You Please',
  url: 'http://www.geocities.com/milq',
  author: {
    name: 'Caspar Milquetoast',
    email: 'hello@me.com'
  }
}
];

// -- Challenge 1 -------------------------
// Return a list of the author names in
// articles using only get, _.flow, and
// _.map.

var names = _.identity; // change this

assertEqualArrays(
    ['Debbie Downer', 'Caspar Milquetoast'],
    names(articles)
);


// -- Challenge 2 -------------------------
// Make a boolean function that says whether
// a given person wrote any of the articles.
// Use the names function you wrote above
// with _.flow and _.contains.

var isAuthor = _.identity; // change this
assertEqual(
  false,
  isAuthor('New Guy', articles)
);
assertEqual(
  true,
  isAuthor('Debbie Downer', articles)
  );

console.log("All tests pass.");

/******************************************
        B A C K G R O U N D  C O D E
*******************************************/

function assertEqualArrays(x,y) {
  if(x.length !== y.length)
    throw("expected "+x+" to equal "+y);
  for(var i in x) {
    if(x[i] !== y[i]) {
      throw("expected "+x+" to equal "+y);
    }
  }
}
function assertEqual(x,y){
  if(x !== y)
    throw("expected "+x+" to equal "+y);
}
