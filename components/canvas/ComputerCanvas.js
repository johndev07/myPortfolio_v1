import React, { Suspense, useState } from "react";
import Computer from "./Computer";
import styles from "../../styles/Computercanvas.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./Loader";
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 30, 5], fov: 25 }}
        className={styles.canvas}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ComputerCanvas;
