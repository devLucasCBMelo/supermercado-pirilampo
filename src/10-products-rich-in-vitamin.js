const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let richVit = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let vitamins = stockProducts[index].nutritionalInfo.vitamins;
    if (vitamins && typeof vitamins !== 'undefined') {
      let modifyFormat = Object.entries(vitamins).map(([key, value]) => `${key} - ${value}`);
      let obj = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        vitaminsInformation: modifyFormat,
      };
      richVit.push(obj);
    }
  }
  return richVit;
};

getProductsRichInVitamin();

module.exports = { getProductsRichInVitamin };
