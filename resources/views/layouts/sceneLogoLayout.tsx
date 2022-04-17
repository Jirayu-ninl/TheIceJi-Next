import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayoutLogo as Scene } from 'views/assets/three/scenes'
import { InnerWidth } from '@libs/hooks/v2/useWindowSize'

export default function SceneLayout({ children }) {
  return (
    <div className='relative flex h-screen w-screen items-center justify-center bg-gradient-to-r from-black to-background-3'>
      <div className='pointer-events-none absolute z-10 flex w-full items-center justify-end'>
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
    <div className='absolute h-screen w-screen overflow-hidden'>
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
