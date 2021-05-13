import React, { useRef, useState, useFrame, useEffect, Suspense } from 'react'
import './App.scss'

import { FrontSide } from 'three'
import { Canvas } from 'react-three-fiber'
import { MeshWobbleMaterial, Stats } from 'drei'

import Header from './components/Header'

import state from './components/state'
import Lights from './components/Lights'
import Loader from './components/Loader'

import MusicPlayer from './components/MusicPlayer'

function App() {
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)

  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  // const camera = useRef()
  // useFrame(({ clock, camera }) => {
  //   camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
  // })

  return (
    <>
      <Header />
      <Loader />
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 110], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <group>
            <mesh>
              <sphereBufferGeometry args={[50, 90]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.2}
                speed={0.79}
                factor={2}
                color={'#b01030'}
              />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
      <MusicPlayer />
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </>
  )
}

export default App
