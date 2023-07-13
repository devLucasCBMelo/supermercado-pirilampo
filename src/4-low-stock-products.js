const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let baixoEstoque = [];
  for (index = 0; index < stockProducts.length; index += 1) {
    let estoque = stockProducts[index];
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      baixoEstoque.push(`${estoque.productName}: ${estoque.quantityInStock} unidades`);
    }
  }
  return baixoEstoque;
};

getLowStockProducts();

module.exports = { getLowStockProducts };
