import { memo } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe } from './Globe';
import { Points } from './Points';

export const Canvas = memo(({ onInit, setClosestPoint, points }) => (
  <ThreeCanvas>
    <ambientLight intensity={4} color="#aadffd" />
    <Globe onInit={onInit} />
    <Points points={points} setClosestPoint={setClosestPoint} />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  </ThreeCanvas>
));
