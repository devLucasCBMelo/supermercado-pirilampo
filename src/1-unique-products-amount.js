const stockProducts = require('./data.json');

const getUniqueProductsAmount = (data) => {
  // Desenvolva seu código dentro dessa função...

  total = stockProducts.length;

  return total;

};

console.log(getUniqueProductsAmount(stockProducts));

module.exports = { getUniqueProductsAmount };
