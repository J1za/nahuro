import { FC } from 'react';
import { Property } from 'store';
import { PropertyUI } from '../property/types';

export type ObjectCardPageComponentProps = FC<{ data: Property }>;

export type CaruselObjectCardProps = Pick<PropertyUI, 'status' | 'name' | 'city' | 'photos'>;

export type PropertyHighlightsProps = Pick<PropertyUI, 'type' | 'class' | 'sqrt'>;

export type InvestmentSummaryCardProps = Pick<
  PropertyUI,
  'totalPriceUI' | 'tokenPriceUI' | 'cocUI' | 'irrUI' | 'equityMultiple' | 'totalTokensUI' | 'tokensLeftUI'
>;

export type ObjectCardinfoProps = PropertyHighlightsProps &
  InvestmentSummaryCardProps & {
    details: PropertyUI['details'];
  };

export type InvestmentOpportunityProps = Pick<
  PropertyUI,
  'totalPriceUI' | 'irrUI' | 'cocUI' | 'tokenPriceUI' | 'tokensLeftUI' | 'tokenPrice' | 'progress' | 'progressUI'
>;
