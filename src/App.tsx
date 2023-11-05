import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, useGLTF } from '@react-three/drei'


function Model() {
  const { scene } = useGLTF("assets/sakura_tree.glb")
  return <primitive object={scene} />
}

export default function App() {

  return (
    <>
      <Canvas camera={{ position: [2, 1, 2], near: 0.05 }}>
        <group>
          <Model />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
    </>
  )
}