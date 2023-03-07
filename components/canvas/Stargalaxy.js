import React from "react";
import { Stars } from "@react-three/drei";
const Stargalaxy = () => {
  return (
    <mesh>
      <Stars radius={100} depth={20} count={5000} factor={4} fade speed={1} />
    </mesh>
  );
};

export default Stargalaxy;
