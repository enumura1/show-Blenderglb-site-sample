import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function Model() {
  const { scene } = useGLTF("assets/moon_and_star.glb")
  return <primitive object={scene} />
}

export default function App() {

  return (
    <>
      <Canvas camera={{ position: [2, 1, 2], near: 0.05 }}
        style={{ background: "#001122" }}>
        {/* 3Dモデルの表示 */}
        <group>
          <Model />
        </group>
        {/* 自動横回転 */}
        <OrbitControls autoRotate />
        {/* ライト */}
        <directionalLight position={[5, 5, 5]} castShadow />
        {/* ブルームエフェクト */}
        <EffectComposer>
          <Bloom />
        </EffectComposer>
      </Canvas>
    </>
  )
}