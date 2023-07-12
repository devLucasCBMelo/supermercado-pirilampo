const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...

  let promotionItens = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      let promotionItensDescription = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        onSale: stockProducts[index].onSale,
      };

      promotionItens.push(promotionItensDescription);
    }
  }
  return promotionItens;
};

getProductsOnSale(stockProducts);

module.exports = { getProductsOnSale };
