function orderTotal(order){
  const total = order.items.reduce((prev, curr)=>curr.price * (curr.quantity || 1)+ prev, 0); 
  
  return total;
}

module.exports = orderTotal;