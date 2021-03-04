import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useMousePosition, useWindowSize } from '../../hooks'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up states
  const [color, changeColor] = useState(true)
  const [active, setActive] = useState(true)
  const position = useMousePosition();
  const windowSize = useWindowSize();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.2, 1.2, 1.2]}
      onClick={(e) => changeColor(!color)}
      onPointerOver={(e) => setActive(false)}
      onPointerOut={(e) => setActive(true)}>
      camera={[position.x,position.y,windowSize.height]}
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color ? 'hotpink' : 'purple'} metalness={0.1}/>
    </mesh>
  )
}

export default function ThreeBox() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  )
}
