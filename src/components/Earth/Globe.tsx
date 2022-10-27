import { memo, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import { EARTH_RADIUS } from './constants';
import { GlobeProps } from './types';

export const Globe = memo(({ onInit }: GlobeProps) => {
  const texture = useTexture('/output-onlinejpgtools.jpg');

  useEffect(() => {
    if (texture) {
      onInit();
    }
  }, [texture, onInit]);

  return (
    <mesh>
      <sphereGeometry args={[EARTH_RADIUS, 120, 120]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
});
