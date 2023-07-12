const stockProducts = require('./data.json');

const searchProductsByBrand = (marca) => {
  let produtos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === marca) {

      let mesmaMarca = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
      };

      produtos.push(mesmaMarca);
    }
  }
  return produtos;
};

searchProductsByBrand(stockProducts);

module.exports = { searchProductsByBrand };
