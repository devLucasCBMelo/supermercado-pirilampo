const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...

  total = stockProducts.length;

  return total;
};

getUniqueProductsAmount();

module.exports = { getUniqueProductsAmount };
