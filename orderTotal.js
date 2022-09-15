function orderTotal(fetch, process, order){
  const orderSum = (order) => order.items.reduce((prev, curr)=>
  curr.price * (curr.quantity || 1)+ prev, 0)
  if(order.country){
    return fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
      headers: {
        apikey: process.env.VAT_API_KEY,
      } 
    })
    .then(response => response.json())
    .then(data => data.rates.standard.value)
    .then(vat => orderSum(order) * (1+vat/100));
  }

  return Promise.resolve(orderSum(order) );    
}

module.exports = orderTotal;