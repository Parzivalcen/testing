const capitalize = (str) =>{
  const upper = str[0].toUpperCase();
  str = str.split('');
  str[0] = upper;
  return str.join('');
}

export {capitalize}