const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...

  total = stockProducts.length;

  return total;
};

getUniqueProductsAmount(stockProducts);

module.exports = { getUniqueProductsAmount };
