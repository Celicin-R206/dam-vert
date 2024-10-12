// components/BlobAnimation.js
import { useEffect, useRef } from "react";
import * as blobs2 from "blobs/v2";
import * as blobs2Animate from "blobs/v2/animate";

interface BlobAnimationProps {
  size: number;
  color: string;
}

const BlobAnimation: React.FC<BlobAnimationProps> = ({ size, color }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const animation = blobs2Animate.canvasPath();

    const renderAnimation = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner uniquement le contour
      ctx.stroke(animation.renderFrame());
      ctx.lineWidth = 0.1; // Largeur du contour
      ctx.strokeStyle = color; // Couleur du contour

      ctx.fill(animation.renderFrame());
      ctx.fillStyle = "#F6EAFE";

      requestAnimationFrame(renderAnimation);
    };
    requestAnimationFrame(renderAnimation);

    const loopAnimation = () => {
      animation.transition({
        duration: 4000,
        timingFunction: "ease",
        callback: loopAnimation,
        blobOptions: {
          seed: Math.random(),
          extraPoints: 10,
          randomness: 5,
          size: size, // Utiliser la taille du prop
        },
      });
    };

    // Initial frame
    animation.transition({
      duration: 0,
      callback: loopAnimation,
      blobOptions: {
        seed: Math.random(),
        extraPoints: 8,
        randomness: 4,
        size: size,
      },
    });

    canvas.onclick = () => {
      animation.playPause();
    };

    return () => {
      canvas.onclick = null;
    };
  }, [size, color]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default BlobAnimation;
