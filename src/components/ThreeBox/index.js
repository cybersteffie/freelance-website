import React, { useRef, useState } from 'react'
// import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'
// import { useTransition, useSpring, a } from 'react-spring/three'
// import { OrbitControls, draco } from 'drei'
import { useMousePosition, useWindowSize } from '../../hooks'

// referenced https://github.com/drcmda/learnwithjason/blob/master/src/App.js

// function Loading() {
//   const [finished, set] = useState(false)
//   const [width, setWidth] = useState(0)

//   useEffect(() => {
//     THREE.DefaultLoadingManager.onLoad = () => set(true)
//     THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
//       setWidth((itemsLoaded / itemsTotal) * 200)
//   }, [])

//   const props = useTransition(finished, null, {
//     from: { opacity: 1, width: 0 },
//     leave: { opacity: 0 },
//     update: { width },
//   })

//   return props.map(
//     ({ item: finished, key, props: { opacity, width } }) =>
//       !finished && (
//         <a.div className="loading" key={key} style={{ opacity }}>
//           <div className="loading-bar-container">
//             <a.div className="loading-bar" style={{ width }} />
//           </div>
//         </a.div>
//       ),
//   )
// }


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
      <boxBufferGeometry args={[1.2, 1.2, 1.2]} />
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
      <fog attach="fog" args={['#cc7b32', 16, 20]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  )
}
