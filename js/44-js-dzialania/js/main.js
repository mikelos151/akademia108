function operation(num1,num2) {
  if (!isNaN(num1) && !isNaN(num2))
  {
    let sum = num1+num2;
    let sub = num1-num2;
    let multi = num1*num2;

    sum>0?console.log("Wynik dodawania wynosi "+sum):console.log("Wynik jest nieprawidłowy");
    sub>=0?console.log("Wynik odejmowanie wynosi "+sub):console.log("Wynik jest nieprawidłowy");
    multi>0?console.log("Wynik mnożenia wynosi "+multi):console.log("Wynik jest nieprawidłowy");

  } else return console.log('Wprowadź poprawne dane');
   
}

operation(10,10);
