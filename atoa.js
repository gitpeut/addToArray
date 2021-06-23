// make a string
const aString = "МДС";

// convert the string to an Array of characters using split('')
let forwardA = aString.split('');
// create an empty string to receive the reversed array
let reverseA = [];

console.log( forwardA );
// pop from the normal order array and push it on the reverse array
for ( let i=0; i < aString.length; ++i ){
    reverseA.push( forwardA.pop() );
}
console.log( reverseA );
let aReverse = reverseA.join('');
console.log( aReverse );