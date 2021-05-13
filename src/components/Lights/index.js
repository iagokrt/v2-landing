import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-10, 0, 5]} intensity={1.2} />

      <directionalLight position={[10, 10, 5]} intensity={0.1} />
      <directionalLight position={[0, 10, 0]} intensity={1.2} />

      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  )
}
