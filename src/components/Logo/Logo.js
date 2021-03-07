import React, { Suspense } from 'react'
// import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Link } from "gatsby";
// import { Title } from "../Core";

// ref https://codeworkshop.dev/blog/2020-03-31-creating-a-3d-spacefox-scene-with-react-three-fiber/
// function Loading() {
//   return (
//     <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
//       <sphereGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial
//         attach="material"
//         color="white"
//         transparent
//         opacity={0.6}
//         roughness={1}
//         metalness={0}
//       />
//     </mesh>
//   );
// }

// function Logo3D() {
//   const group = useRef();
//   const { nodes } = useLoader(GLTFLoader, "../../assets/models/steffieharner-3dlogo.glb");
//   // useFrame will run outside of react in animation frames to optimize updates.
//   useFrame(() => {
//     group.current.rotation.y += 0.004;
//   });
//   return (
//     // Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
//     <group ref={group}>
//       <mesh visible geometry={nodes.Default.geometry}>
//         <meshStandardMaterial
//           attach="material"
//           color="white"
//           roughness={0.3}
//           metalness={0.3}
//         />
//       </mesh>
//     </group>
//   );
// }

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {/* <div className="navbar0brand">
      <img src={logo} alt="steffie harner lgoo" />
      </div> */}
    {/* <Canvas style={{ background: "#171717" }}>
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <Logo3D />
      </Suspense>
    </Canvas> */}
      <Title color={color} variant="cardLg" className="mb-0">
        @steffieharner
      </Title>
    </Link>
  );
};

export default Logo;
