// class Moja {
//   static[Symbol.hasInstance](obiekt) {
//     console.log('symbol has instance');
//     return Object.isSealed(obiekt)

//   }
// }

// class Inne {
//   constructor(text) {
//     this.text = text;
//   }

// }

// const test = new Inne('ddxxxd');
// const tablica = [1, 2, 3, 4, 55];
// // console.log(test.text);
// console.log(tablica instanceof Moja);

// class Kolekcja {
//   *[Symbol.iterator]() {
//     let i = 0;
//     while (this[i] !== undefined) {
//       yield this[i++]
//     }
//   }
// }

// let k = new Kolekcja();
// k[0] = 1;
// k[1] = 2;
// k[2] = 3;

// // console.log(k.next());

// for (const num of k) {
//   console.log(num);

// }


class Moja {
  [Symbol.replace](text) {
    console.log('zmieniam' + text);
    return 'taaa';

  }
}


"adam".replace(new Moja("aaaa"))