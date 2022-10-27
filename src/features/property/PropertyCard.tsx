import { FC } from 'react';
import { PrimaryCard } from './components/PrimaryCard';
import { SecondaryCard } from './components/SecondaryCard';
import { usePropertyData } from './usePropertyData';
import { PropertyCardProps, PropertyVariant } from './types';

export const PropertyCard: FC<PropertyCardProps> = ({ data, variant = PropertyVariant.PRIMARY, minified }) => {
  const uiData = usePropertyData(data);

  if (variant === PropertyVariant.PRIMARY) {
    return <PrimaryCard {...uiData} minified={minified} />;
  }
  if (variant === PropertyVariant.SECONDARY) {
    return <SecondaryCard {...uiData} />;
  }

  return null;
};
