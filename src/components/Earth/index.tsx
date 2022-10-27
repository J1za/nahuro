import { memo, useState, useMemo, useCallback, useRef } from 'react';
import cn from 'classnames';
import { useGetEarthPropertiesQuery } from 'store';
import { PropertyCard } from 'features/property';
import { Canvas } from './Canvas';
import { getXYZbyLatLng } from './helpers';
import { CurrentPoint } from './types';

import './styles.scss';

export const Earth = memo(() => {
  const { data, isLoading } = useGetEarthPropertiesQuery(5);
  const [isInit, setIsInit] = useState<boolean>(false);
  const ref = useRef<Record<number, CurrentPoint>>({});
  const [point, setPoint] = useState<CurrentPoint | undefined>(undefined);

  const showGlob = useMemo(() => isInit && !isLoading, [isInit, isLoading]);

  const onInit = useCallback(() => {
    setIsInit(true);
  }, []);

  const setClosestPoint = useCallback((distance: number, id: number) => {
    ref.current[id] = { distance, id };
    const minDictance = Object.values(ref.current).reduce((prev, curr) =>
      prev.distance < curr.distance ? prev : curr
    );
    setPoint(minDictance.distance < 2.5 ? minDictance : undefined);
  }, []);

  const property = data?.find(item => item.id === point?.id);

  const points = data?.map(item => ({
    id: item.id,
    position: getXYZbyLatLng(item.coordinates.lat, item.coordinates.lng),
    color: item.id === point?.id ? '#1994d9' : '#ffffff'
  }));

  return (
    <div
      className={cn('globe', {
        'globe--init': showGlob
      })}
    >
      <div
        className={cn('card-wrapper', {
          'card-wrapper--visible': !!point
        })}
      >
        {!!property && <PropertyCard data={property} minified />}
      </div>
      <div className="earth-wrapper">
        <div className="earth-shadow" />
        {/* @ts-ignore */}
        <Canvas onInit={onInit} setClosestPoint={setClosestPoint} points={points} />
      </div>
    </div>
  );
});
