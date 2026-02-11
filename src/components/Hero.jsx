'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Don't run animation on mobile
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Google brand colors + neutrals for Antigravity style
        const colors = [
            '#f30000ff', // Google Blue
            '#EA4335', // Google Red
            '#FBBC04', // Google Yellow
            '#34A853', // Google Green
            '#9B59B6', // Purple accent
            '#3a3a3a', // Dark grey
            '#5a5a5a', // Medium grey
            '#7a7a7a', // Light grey
            '#4a4a4a', // Near black
            '#6a6a6a', // Grey
        ];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Reinitialize particles on resize
            initParticles();
        };

        // Initialize particles spread across entire page - Antigravity style
        const initParticles = () => {
            const numParticles = 150;
            particlesRef.current = [];

            for (let i = 0; i < numParticles; i++) {
                // Spread particles across the entire viewport
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                // Determine if particle is colored (30%) or neutral (70%)
                const isColored = Math.random() < 0.3;
                const colorIndex = isColored
                    ? Math.floor(Math.random() * 5) // Pick from first 5 (brand colors)
                    : 5 + Math.floor(Math.random() * 5); // Pick from neutrals

                particlesRef.current.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: 0,
                    vy: 0,
                    // Dash/pill dimensions - elongated shape
                    length: 8 + Math.random() * 16,
                    width: 2 + Math.random() * 2,
                    rotation: Math.random() * Math.PI * 2,
                    speed: 0.02 + Math.random() * 0.03,
                    // Depth simulation - size affects perceived distance
                    depth: 0.3 + Math.random() * 0.7,
                    color: colors[colorIndex],
                    isColored,
                    // Flow field parameters
                    flowAngle: Math.random() * Math.PI * 2,
                    flowSpeed: 0.3 + Math.random() * 0.5,
                    // Idle drift
                    driftPhase: Math.random() * Math.PI * 2,
                    driftSpeed: 0.2 + Math.random() * 0.4,
                    driftAmplitude: 15 + Math.random() * 25,
                });
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking with smooth interpolation
        let targetMouseX = canvas.width / 2;
        let targetMouseY = canvas.height / 2;
        let smoothMouseX = canvas.width / 2;
        let smoothMouseY = canvas.height / 2;

        const handleMouseMove = (e) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop - Antigravity style
        let time = 0;
        const animate = () => {
            time += 0.016;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth mouse interpolation for fluid feel
            smoothMouseX += (targetMouseX - smoothMouseX) * 0.08;
            smoothMouseY += (targetMouseY - smoothMouseY) * 0.08;

            particlesRef.current.forEach((particle) => {
                // Calculate direction from particle to mouse
                const dx = smoothMouseX - particle.x;
                const dy = smoothMouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const orbitRadius = 80; // Particles orbit at this distance
                const interactionRadius = 250; // Strong interaction zone
                const maxDistance = 450; // Weaker influence zone

                // Calculate angle toward mouse
                const angleToMouse = Math.atan2(dy, dx);

                // Orbit physics - attract when far, repel when too close
                let forceX = 0;
                let forceY = 0;

                if (distance < interactionRadius && distance > 0) {
                    if (distance < orbitRadius) {
                        // REPEL - push away from cursor when too close
                        const repelForce = (1 - distance / orbitRadius) * 4;
                        forceX = -(dx / distance) * repelForce;
                        forceY = -(dy / distance) * repelForce;
                    } else {
                        // ATTRACT - pull toward cursor when in outer interaction zone
                        const attractForce = ((distance - orbitRadius) / (interactionRadius - orbitRadius)) * 2;
                        forceX = (dx / distance) * attractForce;
                        forceY = (dy / distance) * attractForce;
                    }

                    // Add tangential (orbital) velocity for swirling effect
                    const tangentX = -dy / distance;
                    const tangentY = dx / distance;
                    const orbitalSpeed = (1 - Math.abs(distance - orbitRadius) / interactionRadius) * 1.5;
                    forceX += tangentX * orbitalSpeed;
                    forceY += tangentY * orbitalSpeed;

                    // Orient along movement direction
                    particle.flowAngle += (angleToMouse - particle.flowAngle) * 0.15;
                } else if (distance < maxDistance) {
                    // Weaker attraction in outer zone
                    const influence = (1 - distance / maxDistance) * 0.8;
                    forceX = (dx / distance) * influence;
                    forceY = (dy / distance) * influence;
                    particle.flowAngle += (angleToMouse - particle.flowAngle) * 0.05;
                }

                // Gentle drift motion (antigravity floating)
                const driftX = Math.sin(time * particle.driftSpeed + particle.driftPhase) * particle.driftAmplitude * 0.012;
                const driftY = Math.cos(time * particle.driftSpeed * 0.7 + particle.driftPhase) * particle.driftAmplitude * 0.012;

                // Base flow movement
                const baseFlowStrength = 0.15;
                const flowVx = Math.cos(particle.flowAngle) * baseFlowStrength;
                const flowVy = Math.sin(particle.flowAngle) * baseFlowStrength;

                // Combine all forces with smooth acceleration
                const targetVx = flowVx + forceX + driftX;
                const targetVy = flowVy + forceY + driftY;

                // Smooth velocity interpolation for fluid movement
                particle.vx += (targetVx - particle.vx) * 0.08;
                particle.vy += (targetVy - particle.vy) * 0.08;

                // Update position with velocity
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Wrap particles around screen edges
                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                // Rotate dash to align with movement direction when moving fast, or toward cursor when near
                let targetRotation;
                const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (distance < interactionRadius) {
                    // Point toward cursor when in interaction zone
                    targetRotation = angleToMouse;
                } else if (speed > 0.5) {
                    // Align with movement direction
                    targetRotation = Math.atan2(particle.vy, particle.vx);
                } else {
                    targetRotation = particle.flowAngle;
                }
                particle.rotation += (targetRotation - particle.rotation) * 0.12;

                // Size based on depth and proximity to cursor - STRONGER effect
                const inInteraction = distance < interactionRadius;
                const proximityBoost = inInteraction
                    ? (1 - distance / interactionRadius) * 1.5  // Strong boost in interaction zone
                    : (distance < maxDistance ? (1 - distance / maxDistance) * 0.3 : 0);
                const currentLength = particle.length * particle.depth * (1 + proximityBoost);
                const currentWidth = particle.width * particle.depth * (1 + proximityBoost);

                // Opacity - much brighter near cursor
                const baseOpacity = 0.25 + particle.depth * 0.35;
                const opacityBoost = inInteraction
                    ? (1 - distance / interactionRadius) * 0.5
                    : (distance < maxDistance ? (1 - distance / maxDistance) * 0.2 : 0);
                const opacity = Math.min(1, baseOpacity + opacityBoost);

                // Draw dash/pill particle
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation);

                // Strong glow effect for particles near cursor
                if (inInteraction) {
                    const glowIntensity = (1 - distance / interactionRadius);
                    ctx.shadowColor = particle.isColored ? particle.color : 'rgba(230, 0, 0, 0.8)';
                    ctx.shadowBlur = 15 * glowIntensity;
                } else if (particle.isColored && distance < maxDistance) {
                    ctx.shadowColor = particle.color;
                    ctx.shadowBlur = 5 * (1 - distance / maxDistance);
                }

                ctx.fillStyle = particle.color;
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.roundRect(-currentLength / 2, -currentWidth / 2, currentLength, currentWidth, currentWidth / 2);
                ctx.fill();
                ctx.restore();
            });

            // Draw red vignette/edge glow
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
            );
            gradient.addColorStop(0, 'rgba(230, 0, 0, 0)');
            gradient.addColorStop(0.7, 'rgba(230, 0, 0, 0)');
            gradient.addColorStop(1, 'rgba(230, 0, 0, 0.08)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isMobile]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Particle canvas - hidden on mobile */}
            {!isMobile && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none z-0"
                />
            )}

            {/* Subtle background gradients */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(230,0,0,0.06)_0%,_transparent_50%)]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(230,0,0,0.04)_0%,_transparent_50%)]" />
            </div>

            {/* Futuristic 3D Element - CENTERED BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] opacity-20 sm:opacity-25 md:opacity-30 flex items-center justify-center">
                    {/* Outer rotating ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="absolute w-full h-full"
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                        <div className="absolute inset-4 sm:inset-8 rounded-full border-2 border-white/10" />
                    </motion.div>

                    {/* Middle counter-rotating ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="absolute w-[80%] h-[80%]"
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/15" />
                    </motion.div>

                    {/* Core element */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
                    >
                        <div className="absolute inset-0 rounded-full bg-white/[0.02] blur-xl" />

                        {/* Inner hexagon pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <polygon
                                        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="1"
                                        className="opacity-15"
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Center dot - RED */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#e60000] shadow-[0_0_30px_rgba(230,0,0,0.6)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-28 md:pt-20 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8"
                    >
                        <span className="block text-white">Engineering</span>
                        <span className="block mt-1 sm:mt-2">
                            <span className="bg-gradient-to-r from-[#e60000] via-[#cc0000] to-[#e60000] bg-clip-text text-transparent">
                                the Future
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        We craft cutting-edge digital experiences and innovative tech solutions
                        that transform businesses and define tomorrow's possibilities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center items-center px-4 sm:px-0"
                    >
                        <a
                            href="#services"
                            className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto bg-gradient-to-r from-[#e60000] to-[#cc0000] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(230,0,0,0.4)] hover:-translate-y-1"
                        >
                            <span className="relative z-10">Explore Services</span>
                            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold text-white border-2 border-white/20 transition-all duration-300 hover:border-[#e60000] hover:text-[#e60000] hover:-translate-y-1"
                        >
                            <span>Get in Touch</span>
                            <svg className="w-5 h-5 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
            >
                <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
                >
                    <motion.div className="w-1 h-2 bg-[#e60000] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
