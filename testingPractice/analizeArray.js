const analizeArray = (array)=>{
  let average = array.reduce((prev, curr) => prev + curr) / array.length;
  const stats = {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return stats
}
export default (analizeArray);