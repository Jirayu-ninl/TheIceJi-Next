import { css } from '@emotion/css'
import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  ScrollControls,
  Scroll,
  useScroll,
  Preload,
  Image as ImageImpl,
} from '@react-three/drei'

function Image(props) {
  const ref = useRef()
  const group = useRef()
  const data = useScroll()
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta,
    )
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta,
    )
  })
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  )
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
        alt='1'
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
        alt='2'
      />
      <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
        alt='3'
      />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={[
          '/mock/image/trip1.jpg',
          '/mock/image/trip2.jpg',
          '/mock/image/trip3.jpg',
        ]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={[
          '/mock/image/img1.jpg',
          '/mock/image/img2.jpg',
          '/mock/image/img3.jpg',
        ]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={[
          '/mock/image/img4.jpg',
          '/mock/image/img5.jpg',
          '/mock/image/img6.jpg',
        ]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={[
          '/mock/image/trip1.jpg',
          '/mock/image/trip2.jpg',
          '/mock/image/trip3.jpg',
        ]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={[
          '/mock/image/img1.jpg',
          '/mock/image/img2.jpg',
          '/mock/image/img3.jpg',
        ]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={[
          '/mock/image/img4.jpg',
          '/mock/image/img5.jpg',
          '/mock/image/img6.jpg',
        ]}
      />
    </>
  )
}

function App() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '20vh', left: '-75vw' }}>
              home
            </h1>
            <h1 style={{ position: 'absolute', top: '20vh', left: '25vw' }}>
              to
            </h1>
            <h1 style={{ position: 'absolute', top: '20vh', left: '125vw' }}>
              be
            </h1>
            <h1 style={{ position: 'absolute', top: '20vh', left: '225vw' }}>
              home
            </h1>
            <h1 style={{ position: 'absolute', top: '20vh', left: '325vw' }}>
              to
            </h1>
            <h1 style={{ position: 'absolute', top: '20vh', left: '425vw' }}>
              be
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}

export default function index() {
  const CSS = css`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    font-family: 'Inter var', sans-serif;
    cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0iYmxhY2siLz48L3N2Zz4='),
      auto;
    & h1 {
      font-size: 30vw;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 0.7em;
      margin: 0;
      padding: 0;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
