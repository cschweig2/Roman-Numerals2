export default function toRoman(num) {
  if (num > 3999 || isNAN(num)) {
    return;
  }
}

// 100=C, 90 = XC, 10=X, 9=IX
// any number equal or less than 3, or if the numbers last digit is 3, like 63, then use III
// anything more, use substraction, except for the major values. 1=I, 2=II, 3=III, 4=IV, 5=V, 6=VI, 7=VII, 8=VIII, 9=IX, 10=X
// instead of using 3 of the same symbols in a row(situation 1), switch to subtraction(situation 2), otherwise use addition(situation 3), or use whole values such as(situation 4):
// 1,5,10,50,100,500,1000
