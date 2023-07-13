const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let nomes = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    nomes.push(stockProducts[index].productName);
  }

  return nomes;
};

// eslint-disable-next-line sonarjs/no-extra-arguments
getUniqueProductsName();

module.exports = { getUniqueProductsName };
