import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayoutBubble as Scene } from 'views/assets/three/scenes'

export default function SceneLayout({ children }) {
  return (
    <div className='relative flex h-screen w-screen items-center justify-center bg-gradient-to-r from-background-2 to-background-1'>
      <div className='absolute z-10 flex w-full items-center justify-end'>
        {children}
      </div>
      <Home_3DScene />
    </div>
  )
}

const Home_3DScene = () => {
  return (
    <div className='absolute hidden h-screen w-screen overflow-hidden xl:block'>
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: true,
          stencil: false,
          depth: false,
        }}
        linear={true}
      >
        <Scene />
      </Canvas>
      <Loader />
    </div>
  )
}
