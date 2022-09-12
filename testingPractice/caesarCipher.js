const caesarCipher = (str) => {
  const strChars = [];
  let joined = [];
  for(let i = 0; i < str.length; i++){
    strChars.push(shift(str[i]));
  };
  
  
  return strChars.join('');
}

function shift (letter){
  let rotate;
  if(isLetter(letter)){
    letter = letter.charCodeAt(0) + 1;
    if(letter > 64 && letter < 92){
      letter = charCase(65, letter);
    }else{
      letter = charCase(97, letter);
    }
    letter = String.fromCharCode(letter);
  }
  
  return letter;
}
function charCase (char, letter) {
  letter = letter - char;
  let rotate = letter % 26;
  letter = rotate;
  return letter += char;
}
function isLetter(str) {
  return str.match(/[a-z]/i);
}
export {caesarCipher}