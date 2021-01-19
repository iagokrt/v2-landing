import React, { useRef, useState, useFrame, useEffect, Suspense } from 'react'
import './App.scss'

import { BoxBufferGeometry, FrontSide } from 'three'
import { Canvas } from 'react-three-fiber'
import { MeshWobbleMaterial, Stats } from 'drei'

import Header from './components/Header'
import Personal from './components/Personal'

import state from './components/state'
import Lights from './components/Lights'
import Loader from './components/Loader'
import { HTMLContent } from './components/Content'
import { PositionalSoundEffect } from './components/PositionalAudio'

import { Viewer } from './components/Viewer'

const me = {
  title: `Why Should I've not been busy?`
}

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
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath={'/lamp.gltf'}
            positionY={250}
            bgColor={'orange'}
            rotateVelocity={0.002}
            meshX={0}
            meshY={-20}
            meshScale={[12, 12, 12]}
          >
            <h1>{me.title}</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/rose.gltf"
            positionY={0}
            bgColor={'tomato'}
            rotateVelocity={-0.005}
            meshX={20}
            meshY={5}
            meshZ={22}
            meshScale={[12, 12, 12]}
          >
            <h1>About You</h1>
            <Viewer />
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/sphere.gltf"
            positionY={-255}
            bgColor={'#000222'}
            rotateVelocity={-0.005}
            meshX={20}
            meshY={45}
            meshScale={[1.5, 1.5, 1.5]}
          >
            <h1>About Me</h1>
            <Personal />
          </HTMLContent>

          <group>
            <mesh>
              <sphereBufferGeometry args={[290, 360, 100]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.12}
                speed={0.49}
                factor={1.9}
                color={'black'}
              />
            </mesh>
          </group>
          <PositionalSoundEffect />
          <Stats />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </>
  )
}

export default App
