/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "leaf" | "dust";
  color: string;
}

export default function NatureParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLowPower] = useState(false); // Can be toggled if user has low-end device

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width || window.innerWidth;
        height = canvas.height = entry.contentRect.height || window.innerHeight;
        initParticles();
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Leaf colors: rich forest greens, lime greens, golden yellow-greens
    const leafColors = [
      "rgba(34, 139, 34, 0.25)",   // Forest Green
      "rgba(46, 139, 87, 0.3)",    // Sea Green
      "rgba(107, 142, 35, 0.25)",  // Olive Green
      "rgba(143, 188, 143, 0.3)",  // Dark Sea Green
      "rgba(128, 128, 0, 0.2)",    // Olive
    ];

    // Dust colors: soft golden pollen particles
    const dustColors = [
      "rgba(250, 204, 21, 0.2)",   // Gold
      "rgba(253, 224, 71, 0.15)",  // Yellow
      "rgba(255, 255, 255, 0.12)", // White soft gleam
    ];

    function createParticle(initYTop: boolean = false): Particle {
      const type = Math.random() > 0.4 ? "dust" : "leaf";
      const x = Math.random() * width;
      // Start of life: distribute all over initially, or spawn from top/left when recycling
      const y = initYTop ? -20 : Math.random() * height;
      const radius = type === "leaf" ? Math.random() * 8 + 4 : Math.random() * 1.5 + 0.5;
      
      return {
        x,
        y,
        radius,
        // Drift downwards and to the left (representing soft wind)
        speedX: Math.random() * (-0.6) - 0.2, 
        speedY: Math.random() * 0.8 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.1,
        type,
        color: type === "leaf" 
          ? leafColors[Math.floor(Math.random() * leafColors.length)]
          : dustColors[Math.floor(Math.random() * dustColors.length)]
      };
    }

    function initParticles() {
      // Scale particle count based on screen size for performance
      const particleCount = Math.min(Math.floor((width * height) / 18000), isLowPower ? 20 : 60);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(false));
      }
    }

    // Draw leaf shape
    function drawLeaf(c: CanvasRenderingContext2D, p: Particle) {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.beginPath();
      // Simple organic leaf path
      c.moveTo(0, -p.radius);
      c.quadraticCurveTo(p.radius * 0.6, -p.radius * 0.3, 0, p.radius);
      c.quadraticCurveTo(-p.radius * 0.6, -p.radius * 0.3, 0, -p.radius);
      c.fillStyle = p.color;
      c.fill();
      
      // Draw a tiny leaf center line for cinematic depth
      c.beginPath();
      c.moveTo(0, -p.radius);
      c.lineTo(0, p.radius * 0.8);
      c.strokeStyle = "rgba(255, 255, 255, 0.08)";
      c.lineWidth = 1;
      c.stroke();
      
      c.restore();
    }

    // Draw dust glow ball
    function drawDust(c: CanvasRenderingContext2D, p: Particle) {
      c.save();
      c.beginPath();
      c.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      c.fillStyle = p.color;
      c.fill();
      c.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.type === "leaf") {
          p.rotation += p.rotationSpeed;
          // Add subtle sway
          p.x += Math.sin(p.y / 30 + p.radius) * 0.2;
        }

        // Recycle if goes offscreen
        const isOffscreen = p.y > height + 20 || p.x < -20 || p.x > width + 20;
        if (isOffscreen) {
          particles[i] = createParticle(true);
        }

        // Draw
        ctx.globalAlpha = p.opacity;
        if (p.type === "leaf") {
          drawLeaf(ctx, p);
        } else {
          drawDust(ctx, p);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [isLowPower]);

  return (
    <canvas
      ref={canvasRef}
      id="nature-particles"
      className="absolute inset-0 pointer-events-none mix-blend-screen z-10 block"
    />
  );
}
