import { Property } from 'store';
import { PropertyUI } from './types';
import { formatPercent, formatCurrency, formatNumber, trimDecimal } from './helpers';

export const usePropertyData = (data: Property): PropertyUI => {
  const tokensLeft = data.totalTokens - data.boughtTokens;
  const progress = trimDecimal((data.boughtTokens * 100) / data.totalTokens);
  const totalPrice = data.tokenPrice * data.totalTokens;
  const currentPrice = data.tokenPrice * data.boughtTokens;

  return {
    ...data,
    progress,
    totalPrice,
    currentPrice,
    tokensLeft,
    progressUI: formatPercent(progress),
    totalPriceUI: formatCurrency(totalPrice),
    currentPriceUI: formatCurrency(currentPrice),
    tokensLeftUI: formatNumber(tokensLeft),
    irrUI: formatPercent(data.irr),
    cocUI: formatPercent(data.coc),
    valueAddUI: formatPercent(data.valueAdd),
    equityUI: formatPercent(data.equity),
    constructionProgressUI: formatPercent(data.constructionProgress),
    tokenPriceUI: formatCurrency(data.tokenPrice),
    totalTokensUI: formatNumber(data.totalTokens),
    boughtTokensUI: formatNumber(data.boughtTokens)
  };
};
