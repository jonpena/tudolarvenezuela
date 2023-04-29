export const ConvertValue = function (price: string) {
  const number = parseFloat(price.replace(',', '.'));
  return number.toFixed(2).toString();
};
