const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let totalEstoque = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    totalEstoque += stockProducts[index].quantityInStock;
  }
  return totalEstoque;
};

getProductsAmount();

module.exports = { getProductsAmount };
