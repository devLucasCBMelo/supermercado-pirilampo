const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let semEstoque = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      semEstoque.push(stockProducts[index].productName);
    }
  }
  return semEstoque;
};

getOutOfStockProducts(stockProducts);

module.exports = { getOutOfStockProducts };
