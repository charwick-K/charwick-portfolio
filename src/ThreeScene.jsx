import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Float } from "@react-three/drei"

function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <FloatingSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
