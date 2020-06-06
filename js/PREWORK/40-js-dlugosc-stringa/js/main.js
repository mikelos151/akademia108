let text1 =  "Uwielbiam JavaScript";
let text2 = "Jestem świetnym programistą";

function longerText(text1,text2){
  return text1.length>text2.length?text1:text2;
}

console.log(longerText(text1,text2));
