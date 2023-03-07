import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader";
import Stargalaxy from "./Stargalaxy";
import styles from "../../styles/Stargalaxy.module.css";
import { OrbitControls, Preload } from "@react-three/drei";

const StarCanvas = () => {
  return (
    <div className={styles.galaxy}>
      <Canvas shadows frameloop="demand">
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.2}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stargalaxy />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
