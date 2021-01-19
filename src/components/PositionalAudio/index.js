import React, { useRef, useState, useFrame } from 'react'

import { PositionalAudio } from 'drei'

const PositionalSoundEffect = () => {
  const mesh = useRef()

  const [select, set] = useState(false)

  const args = [
    {
      position: [12, 0, -33],
      url: 'Salvando.m4a',
      color: '#0000ff'
    },
    {
      position: [-12, 0, -33],
      url: 'Saverrr.m4a',
      color: '#ff0000'
    }
  ]

  return (
    <>
      <group position={[0, 0, 120]}>
        {args.map(({ position, url, color }, index) => (
          <mesh
            key={`0${index}`}
            position={position}
            onClick={() => set(!select)}
          >
            <octahedronBufferGeometry attach="geometry" />

            <meshNormalMaterial attach="material" />
            <PositionalAudio url={url} />
          </mesh>
        ))}
      </group>
    </>
  )
}

export { PositionalSoundEffect }
