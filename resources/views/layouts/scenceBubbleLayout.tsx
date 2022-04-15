import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayoutBubble as Scene } from 'views/assets/three/scenes'

export default function SceneLayout({ children }) {
  return (
    <div className='flex relative justify-center items-center w-screen h-screen bg-gradient-to-r from-background-2 to-background-1'>
      <div className='flex absolute z-10 justify-end items-center w-full'>
        {children}
      </div>
      <Home_3DScene />
    </div>
  )
}

const Home_3DScene = () => {
  return (
    <div className='hidden overflow-hidden absolute w-screen h-screen xl:block'>
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
