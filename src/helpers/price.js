export const getProperPrice = (price) => {
  return parseFloat(Number(price)?.toFixed(2)).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
}