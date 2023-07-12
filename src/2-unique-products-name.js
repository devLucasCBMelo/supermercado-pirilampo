const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let nomes = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    nomes.push(stockProducts[index].productName);
  }

  return nomes;
};

getUniqueProductsName(stockProducts);

module.exports = { getUniqueProductsName };
