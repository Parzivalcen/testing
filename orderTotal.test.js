
const orderTotal = require('./orderTotal')
const emptyFunction = () => {};


// TESTS //
it('Calls API correctly', ()=> {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
    isFakeFetchCalled = true;
  }
  orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      {name: 'Dragon Food', price: 8, quantity: 2},
    ]
  }).then(result => {
    expect(isFakeFetchCalled).toBe(true);
  });
});


it('No Quantity', ()=>
  orderTotal(emptyFunction,{
    items: [
      {name: 'Dog Food', price: 8},
    ]
  }).then(result => expect(result).toBe(8)));



  it('Quantity', ()=>
  orderTotal(emptyFunction,{
    items: [
      {name: 'Dog Food', price: 8, quantity: 2},
    ]
  }).then(result=>expect(result).toBe(16)));


  it('Happy path (1)', ()=>
    orderTotal(emptyFunction,{
      items: [
        {name: 'Dog Food', price: 8, quantity: 2},
        {name: 'Dog sword', price: 800, quantity: 1}
      ]
    }).then(result=>expect(result).toBe(816)));


it('Happy path (2)', ()=>
  orderTotal(emptyFunction,{
    items: [
      {name: 'Dog toy', price: 5, quantity: 2},
      {name: 'Dog pourer', price: 80, quantity: 1}
    ]
  }).then(result=>expect(result).toBe(90)));

it('Happy path (3)', ()=>
  orderTotal(emptyFunction,{
    items: [
      {name: 'Dog toy', price: 5, quantity: 3},
      {name: 'Dog pourer', price: 80, quantity: 2}
    ]
  }).then(result=>expect(result).toBe(175)));
