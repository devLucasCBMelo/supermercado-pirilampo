const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let alergias = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance !== undefined) {
      const alergOuInto = stockProducts[index].allergyOrIntolerance.join(" ");
      let itemAlergico = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        allergyOrIntoleranceMessage: `Pode conter: ${alergOuInto}`,
      };
      alergias.push(itemAlergico);
    }
  }
  return alergias;
};

console.log(getProductsWithAllergyOrIntoleranceInfo(stockProducts));
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
