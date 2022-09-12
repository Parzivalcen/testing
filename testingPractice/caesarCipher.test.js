import {caesarCipher} from './caesarCipher';

test('Cipher (1)', ()=>
  expect(caesarCipher('abc.')).toBe('bcd.'))

test('Cipher (2)', ()=>
  expect(caesarCipher('david')).toBe('ebwje'))

test('Cipher Punctuation (3)', ()=>{
  expect(caesarCipher("Don't forget to test keeping.")).toBe("Epo'u gpshfu up uftu lffqjoh.");
})

test('Cipher Mayus(4)', ()=>{
  expect(caesarCipher("Tomorrow is August!")).toBe("Upnpsspx jt Bvhvtu!");
})

test('Cipher loop (5)', ()=>{
  expect(caesarCipher("Zapato")).toBe("Abqbup");
})
test('Cipher loop (6)', ()=>{
  expect(caesarCipher("zapato")).toBe("abqbup");
})