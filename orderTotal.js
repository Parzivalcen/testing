function orderTotal(fetch, order){
  fetch('https://vatapi.com/v1/country-code-check?code=' + order.country);
  return Promise.resolve( order.items.reduce((prev, curr)=>
    curr.price * (curr.quantity || 1)+ prev, 0));    
}

module.exports = orderTotal;