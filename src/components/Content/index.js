import React, { useRef, useEffect } from 'react'

import { useFrame } from 'react-three-fiber'

import { Html, useGLTFLoader } from 'drei'

import { useInView } from 'react-intersection-observer'

import { Section } from '../section'

const Model = ({ modelPath }) => {
  const gltf = useGLTFLoader(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

export const HTMLContent = ({
  domContent,
  bgColor,
  children,
  modelPath,
  positionY,
  rotateVelocity,
  meshY,
  meshX,
  meshZ,
  meshScale
}) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += rotateVelocity))

  const [refItem, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    inView && (document.body.style.background = bgColor)
  }, [bgColor, inView])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[meshX, meshY, meshZ]} scale={meshScale}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <div className="container" ref={refItem}>
            {children}
          </div>
        </Html>
      </group>
    </Section>
  )
}
