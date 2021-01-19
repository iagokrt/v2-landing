# Artistic Development

## R3F portfolio page

#<group>
<mesh ref={activeMesh}>
<boxBufferGeometry attach="geometry" args={[2,2,2]} />
<meshNormalMaterial attach="material" />
</mesh>
</group>

          function CameraComp({ position }) {

return <perspectiveCamera position={position}></perspectiveCamera>
}
function CamMov() {
const camera = useRef()

useFrame(({ clock, camera }) => {
camera.position.z = 50 + Math.sin(clock.getElapsedTime()) \* 30
})
return null
}
