export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 2,
  };
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('jp-JP', options);

  return formatter.format(amount * 1.3);
}
