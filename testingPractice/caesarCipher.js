const caesarCipher = (str) => {
  const strlen = str.length;
  const strChars = [];
  for(let i = 0; i < strlen; i ++){
    strChars.push(shift(str[i]));
  }
  return strChars.join('');
}

function shift(letter){
  if(isLetter(letter)){
    letter = letter.charCodeAt(0) + 1
    if(letter >= 65 && letter <= 91){
      letter = rotate(65, letter);
    }else if (letter >= 97 && letter <= 123){
      letter = rotate(97, letter);
    }
    letter = String.fromCharCode(letter);
    return letter;
  }
  return letter;
  
}
function rotate(charCode, letter){
  letter = letter - charCode;
  letter = letter % 26;
  return letter += charCode;
}
function isLetter(letter){
  return letter.match(/[a-z]/i);
}

export {caesarCipher}

// caesarCipher
//  create array to store the shifted letters
//  loop through length of the str
//    push the shifted letter to the previous array. 

// shift
// if letter is letter
//  convert letter to char code, and add 1
// else
//  return letter 

// Mayus(charCode, letter)
//  letter = letter - charcode
//  letter = letter % charcode
//  String.fromCharCodeAr(letter);

// isLetter
//  check if letter is not punctuation with regex.     
