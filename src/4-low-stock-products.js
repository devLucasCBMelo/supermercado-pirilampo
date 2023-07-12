const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let baixoEstoque = [];
  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      baixoEstoque.push(`${stockProducts[index].productName} : ${stockProducts[index].quantityInStock} unidade`);
    }
  }
  return baixoEstoque;
};

getLowStockProducts(stockProducts);

module.exports = { getLowStockProducts };
