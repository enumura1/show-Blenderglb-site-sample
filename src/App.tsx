import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, useGLTF } from '@react-three/drei'


function Model() {
  const { scene } = useGLTF("assets/sakura_tree.glb")
  return <primitive object={scene} />
}

export default function App() {

  return (
    <>
      <Canvas camera={{ position: [2, 1, 2], near: 0.05 }}
        style={{ background: "#001122" }} >
        {/* 3Dモデルの表示 */}
        <group>
          <Model />
        </group>
        {/* 自動横回転 */}
        <OrbitControls autoRotate />
        {/* 統計情報 */}
        <Stats />
      </Canvas>
    </>
  )
}