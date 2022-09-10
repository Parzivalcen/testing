const sum = require ('./sum');

test ('adds 1 + 2, to equal 3', ()=>
  expect(sum(1, 2)).toBe(3));

test('added positive number is not 0', () =>{
  for(let a = 1; a < 10; a++){
    for(let b = 1; b < 10; b++){
      expect(a+b).not.toBe(0)
    }
  }
})