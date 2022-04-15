import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayoutLogo as Scene } from 'views/assets/three/scenes'
import { InnerWidth } from '@libs/hooks/v2/useWindowSize'

export default function SceneLayout({ children }) {
  return (
    <div className='flex relative justify-center items-center w-screen h-screen bg-gradient-to-r from-black to-background-3'>
      <div className='flex absolute z-10 justify-end items-center w-full pointer-events-none'>
        {children}
      </div>
      <Home_3DScene />
    </div>
  )
}

const Home_3DScene = () => {
  const Width = InnerWidth(-1)
  const IsMobile = Width <= 1200

  return (
    <div className='overflow-hidden absolute w-screen h-screen'>
      <Canvas
        dpr={IsMobile ? [0.5, 0.5] : [1, 1]}
        gl={{
          powerPreference: IsMobile ? 'low-power' : 'high-performance',
          alpha: true,
          antialias: !IsMobile,
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
