const symX = Symbol.for('global-symbol');
const symY = Symbol.for('global-symbol');

console.log(symX === symY);

console.log(Symbol.keyFor(symX));

const symbolLocal = Symbol('superSymbol');
const symbolGlobal = Symbol.for('superSymbol');

console.log(Symbol.keyFor(symbolLocal));
console.log(Symbol.keyFor(symbolGlobal));
console.log(Symbol.keyFor(symbolLocal) === undefined);
console.log(Symbol.keyFor(symbolGlobal) === 'superSymbol');

console.log(Symbol.for(Symbol.keyFor(symbolGlobal)) === Symbol.for('superSymbol'));