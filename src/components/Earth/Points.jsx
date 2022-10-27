import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';

const Point = ({ setClosestPoint, id, position, color }) => {
  const ref = useRef();
  useFrame(({ camera }) => {
    const distance = ref.current.position.distanceTo(camera.position);

    // if (distance < 2.5) {
      setClosestPoint(distance, id);
    // } else {
    //   setClosestPoint(undefined, id);
    // }
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.04, 6, 6]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
};

export const Points = ({ points, setClosestPoint }) => (
  <Suspense fallback={null}>
    {points?.map(item => (
      <Point key={item.id} {...item} setClosestPoint={setClosestPoint} />
    ))}
  </Suspense>
);
