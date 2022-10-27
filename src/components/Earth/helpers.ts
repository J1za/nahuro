import { EARTH_RADIUS } from './constants';

export const getXYZbyLatLng = (lat: number, lng: number): number[] => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(EARTH_RADIUS * Math.sin(phi) * Math.cos(theta));
  const y = EARTH_RADIUS * Math.cos(phi);
  const z = EARTH_RADIUS * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
};
