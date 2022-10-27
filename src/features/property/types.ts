import { Property } from 'store';

export type PropertyUI = Property & {
  progress: number;
  totalPrice: number;
  currentPrice: number;
  tokensLeft: number;
  progressUI: string;
  totalPriceUI: string;
  currentPriceUI: string;
  tokensLeftUI: string;
  irrUI: string;
  cocUI: string;
  valueAddUI: string;
  equityUI: string;
  constructionProgressUI: string;
  tokenPriceUI: string;
  totalTokensUI: string;
  boughtTokensUI: string;
};

export enum PropertyVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type PropertyCardProps = {
  data: Property;
  variant?: PropertyVariant;
  minified?: boolean;
};

export type PrimaryCardProps = Partial<PropertyUI> & { minified?: boolean };
export type SecondaryCardProps = Partial<PropertyUI>;
