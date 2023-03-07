import React from "react";
import { useGLTF, Stars } from "@react-three/drei";
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={3.5}
        position={[0, 0, 0]}
        rotation-y={2}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-50, 3, 6] }}
      />
    </mesh>
  );
};

export default Earth;
