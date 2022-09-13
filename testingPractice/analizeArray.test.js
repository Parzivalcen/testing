import analizeArray from './analizeArray';

test('Analize', ()=>{
  expect(analizeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5})
})

test('Analize (2)', ()=>{
  expect(analizeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6})
})

