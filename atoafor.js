


const a = "berebiet";

let forwardA = a.split('');
let aReverse = "";

for ( let i = forwardA.length - 1; i >= 0; --i ){
    aReverse += forwardA[i];
}

console.log( a + ' -> ' + aReverse);
