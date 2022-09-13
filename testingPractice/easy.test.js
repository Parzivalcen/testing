import {calculator, capitalize, reverseString} from './easy';

test ('Capitalize', () => 
  expect(capitalize('reanto')).toMatch(/^[A-Z][a-z]/));

test('string is reversed (1)', ()=>
  expect(reverseString('abc')).toBe('cba'));

test('string is reversed (2)', ()=>
  expect(reverseString('david')).toBe('divad'));


  // Calculator
test('Sum (1)', ()=>
  expect(calculator.sum(2, 2)).toBe(4))

test('Sum (2)', ()=>
  expect(calculator.sum(-2, -2)).toBe(-4))

test('Sum (3)', ()=>
  expect(calculator.sum(2, -2)).toBe(0))

// Subtracction
test('Subs (1)', ()=>
  expect(calculator.subs(2, -2)).toBe(4))

test('Subs (2)', ()=>
  expect(calculator.subs(5, 2)).toBe(3))

  // Divide
test('Divide (1)', ()=>
  expect(calculator.divide(2, 2)).toBe(2/2))

test('Divide (2)', ()=>
  expect(calculator.divide(5, 2)).toBe(5/2))

// Multiply
test('multiply (1)', ()=>
  expect(calculator.multiply(5, 2)).toBe(5*2))
