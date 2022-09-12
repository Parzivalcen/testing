
const orderTotal = require('./orderTotal')

// TESTS //
it('No Quantity', ()=>
  expect(orderTotal({
    items: [
      {name: 'Dog Food', price: 8},
    ]
  })).toBe(8));



  it('Quantity', ()=>
  expect(orderTotal({
    items: [
      {name: 'Dog Food', price: 8, quantity: 2},
    ]
  })).toBe(16))


  it('Happy path (1)', ()=>
    expect(orderTotal({
      items: [
        {name: 'Dog Food', price: 8, quantity: 2},
        {name: 'Dog sword', price: 800, quantity: 1}
      ]
    })).toBe(816));


it('Happy path (2)', ()=>
  expect(orderTotal({
    items: [
      {name: 'Dog toy', price: 5, quantity: 2},
      {name: 'Dog pourer', price: 80, quantity: 1}
    ]
  })).toBe(90));

it('Happy path (3)', ()=>
  expect(orderTotal({
    items: [
      {name: 'Dog toy', price: 5, quantity: 3},
      {name: 'Dog pourer', price: 80, quantity: 2}
    ]
  })).toBe(175));