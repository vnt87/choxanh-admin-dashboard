import { useEffect, useRef } from 'react';
import { useSplashCursor } from '@/context/SplashCursorContext';

function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true,
}) {
  const { isEnabled } = useSplashCursor();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // ... (rest of the existing WebGL implementation)

    return () => {
      // Cleanup code
    };
  }, [isEnabled, SIM_RESOLUTION, DYE_RESOLUTION, CAPTURE_RESOLUTION, DENSITY_DISSIPATION, 
      VELOCITY_DISSIPATION, PRESSURE, PRESSURE_ITERATIONS, CURL, SPLAT_RADIUS, 
      SPLAT_FORCE, SHADING, COLOR_UPDATE_SPEED, BACK_COLOR, TRANSPARENT]);

  if (!isEnabled) return null;

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas ref={canvasRef} id="fluid" className="w-screen h-screen" />
    </div>
  );
}

export default SplashCursor;
