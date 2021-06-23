const aString = "\"Pycckoe FM\"";

let aReverse = "";

for ( let i = aString.length - 1; i >= 0; --i ){
    aReverse += aString.charAt(i);
}

console.log( aString + ' -> ' + aReverse);
