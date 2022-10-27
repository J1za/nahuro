export const formatPercent = (val: number): string => {
  const adaptedVal = val / 100;

  const option = {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  };

  const formatter = new Intl.NumberFormat('en-US', option);

  return formatter.format(adaptedVal);
};

export const formatCurrency = (val: number): string => {
  const option = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  };

  const formatter = new Intl.NumberFormat('en-US', option);

  return formatter.format(val);
};

export const formatNumber = (val: number): string => {
  const formatter = new Intl.NumberFormat('en-US');

  return formatter.format(val);
};

export const trimDecimal = (val: number): number => Math.round(val * 100) / 100;
