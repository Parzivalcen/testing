const capitalize = (str) =>{
  const upper = str[0].toUpperCase();
  str = str.split('');
  str[0] = upper;
  return str.join('');
}

const reverseString = (str) =>{
  str = str.split('');
  str.reverse();
  return str.join('');
}

const calculator = {
  sum (a, b){
    return a+b;
  },
  subs (a, b){
    return a - b;
  },
  divide (a, b){
    return a / b;
  },
  multiply (a, b){
    return a * b;
  }
}
export {capitalize, reverseString, calculator}