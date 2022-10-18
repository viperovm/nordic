export const getProperPrice = (price) => {
  console.log(price)
  return parseFloat(Number(price)?.toFixed(2)).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
}