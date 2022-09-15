
const orderTotal = require('./orderTotal')


// TESTS //
it('Calls API correctly', ()=> {
  const fakeProcess = {
    env:{
      VAT_API_KEY: 'apiKey123'
    }
  }
  const fakeFetch2 = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      rates:{
        standard:{
          value: 19
        }
      }
    })
  }));

  return orderTotal(fakeFetch2, fakeProcess, {
    country: 'DE',
    items: [
      {name: 'Dragon Food', price: 8, quantity: 2},
    ]
  }).then(result => {
    expect (fakeFetch2).toBeCalledWith('https://vatapi.com/v1/country-code-check?code=DE', {"headers": {"apikey": "apiKey123"}})
    expect(result).toBe(8 * 2 * 1.19)});
  
});


it('No Quantity', ()=>
  orderTotal(null, null, {
    items: [
      {name: 'Dog Food', price: 8},
    ]
  }).then(result => expect(result).toBe(8)));



  it('Quantity', ()=>
  orderTotal(null, null, {
    items: [
      {name: 'Dog Food', price: 8, quantity: 2},
    ]
  }).then(result=>expect(result).toBe(16)));


  it('Happy path (1)', ()=>
    orderTotal(null, null, {
      items: [
        {name: 'Dog Food', price: 8, quantity: 2},
        {name: 'Dog sword', price: 800, quantity: 1}
      ]
    }).then(result=>expect(result).toBe(816)));


it('Happy path (2)', ()=>
  orderTotal(null, null, {
    items: [
      {name: 'Dog toy', price: 5, quantity: 2},
      {name: 'Dog pourer', price: 80, quantity: 1}
    ]
  }).then(result=>expect(result).toBe(90)));

it('Happy path (3)', ()=>
  orderTotal(null, null, {
    items: [
      {name: 'Dog toy', price: 5, quantity: 3},
      {name: 'Dog pourer', price: 80, quantity: 2}
    ]
  }).then(result=>expect(result).toBe(175)));
