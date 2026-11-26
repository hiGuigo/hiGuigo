import { useEffect, useRef } from "react";
import "./background.css";

const STAR_COLORS = ["#ffffff", "#e8efff", "#d9e5ff"];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createStar(width, height) {
  const depth = Math.random();
  const layer = depth < 0.58 ? 0 : depth < 0.9 ? 1 : 2;
  const sizes = [
    1,
    Math.random() < 0.85 ? 1 : 2,
    Math.random() < 0.82 ? 1 : 2,
  ];
  const speedRanges = [
    [2, 4.5],
    [4.5, 8],
    [7.5, 13],
  ];
  const opacityRanges = [
    [0.48, 0.72],
    [0.62, 0.86],
    [0.76, 0.98],
  ];

  return {
    x: Math.round(Math.random() * width),
    y: Math.round(Math.random() * height),
    size: sizes[layer],
    speed: randomBetween(...speedRanges[layer]),
    angle: randomBetween(0, Math.PI * 2),
    turn: randomBetween(-0.09, 0.09),
    opacity: randomBetween(...opacityRanges[layer]),
    twinkle: randomBetween(0.35, 0.8),
    phase: randomBetween(0, Math.PI * 2),
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
  };
}

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionPreference.matches;
    let animationFrame = null;
    let previousTime = 0;
    let stars = [];
    let width = 0;
    let height = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(1600, Math.max(350, Math.round((width * height) / 2200)));
      stars = Array.from({ length: count }, () => createStar(width, height));
      draw(0, 0);
    }

    function draw(time, delta) {
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        if (delta > 0) {
          const motionScale = reducedMotion ? 0.22 : 1;
          star.angle += star.turn * delta * motionScale;
          star.x += Math.cos(star.angle) * star.speed * delta * motionScale;
          star.y += Math.sin(star.angle) * star.speed * delta * motionScale;

          if (star.x < -star.size) star.x = width;
          if (star.x > width) star.x = -star.size;
          if (star.y < -star.size) star.y = height;
          if (star.y > height) star.y = -star.size;
        }

        const shimmer = reducedMotion
          ? 1
          : 0.84 + Math.sin(time * star.twinkle + star.phase) * 0.16;
        context.globalAlpha = star.opacity * shimmer;
        context.fillStyle = star.color;
        context.fillRect(star.x, star.y, star.size, star.size);
      }

      context.globalAlpha = 1;
    }

    function animate(time) {
      animationFrame = null;
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
      previousTime = time;
      draw(time / 1000, delta);
      animationFrame = window.requestAnimationFrame(animate);
    }

    function stop() {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      previousTime = 0;
    }

    function start() {
      if (document.hidden || animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(animate);
    }

    function onVisibilityChange() {
      if (document.hidden) stop();
      else start();
    }

    function onMotionPreferenceChange(event) {
      reducedMotion = event.matches;
      if (reducedMotion) draw(0, 0);
      start();
    }

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionPreference.addEventListener("change", onMotionPreferenceChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="background" aria-hidden="true" />;
}
