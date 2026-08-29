import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const seededRandom = (seed) => {
  const value = Math.sin(seed * 999.91) * 43758.5453;
  return value - Math.floor(value);
};

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (seededRandom(i * 3 + 1) - 0.5) * 10,
          seededRandom(i * 3 + 2) * 10 + 5,
          (seededRandom(i * 3 + 3) - 0.5) * 10,
        ],
        speed: 0.005 + seededRandom(i + 100) * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = seededRandom(i + 200) * 10 + 5;
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    particles.forEach((particle, index) => {
      values[index * 3] = particle.position[0];
      values[index * 3 + 1] = particle.position[1];
      values[index * 3 + 2] = particle.position[2];
    });
    return values;
  }, [count, particles]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
