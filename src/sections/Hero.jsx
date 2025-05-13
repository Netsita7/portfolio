import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { FaDownload } from "react-icons/fa"; 


import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const handleDownload = () => {
    const pdfUrl = "/Netsanet-Melese's-CV.pdf";

    // Open the PDF in a new tab
    const newTab = window.open(pdfUrl, "_blank");

    // Delay download to ensure the PDF opens first
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.click();
    }); // Delay for 1 second
  };
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col lg:mt-20 sm:mt-43 mt-20 c-space gap-3">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hello, I am Netsanet <span className="waving-hand">👋</span>
        </p>
        {/* <p className="hero_tag text-gray_gradient">Turning Ideas into Reality</p> */}
        <p>Turning Ideas</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-4 left-0 right-0 w-full z-10 flex justify-center gap-4">
  <a href="#contact">
    <Button
      name="Let's work together"
      isBeam
      containerClass="w-auto px-4 py-2"
    />
  </a>

  <a href="/Netsanet-Melese's-CV.pdf" target="_blank" rel="noopener noreferrer">
  <Button
    name={
      <>
        <FaDownload className="inline-block mr-2 text-green-500" />
        Download Resume
      </>
    }
    containerClass="w-auto px-4 py-2"
    onClick={handleDownload}
  />
</a>

</div>
    </section>
  );
};

export default Hero;
