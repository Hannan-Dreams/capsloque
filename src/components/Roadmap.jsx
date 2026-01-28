'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const roadmapItems = [
    {
        year: '2026',
        quarter: 'Q1',
        title: 'Drones',
        description: 'Advanced autonomous drone systems for commercial and recreational applications with AI-powered navigation.',
        icon: '🚁',
        color: '#e60000',
        features: ['Autonomous Navigation', 'HD Streaming', 'Smart Route Planning'],
    },
    {
        year: '2026',
        quarter: 'Q2',
        title: 'Smart Home Appliances',
        description: 'Next-generation IoT-enabled home devices that learn and adapt to your lifestyle for maximum comfort.',
        icon: '🏠',
        color: '#e60000',
        features: ['Voice Control', 'Energy Efficient', 'App Integration'],
    },
    {
        year: '2026',
        quarter: 'Q3',
        title: 'Automobile Modifications',
        description: 'Cutting-edge vehicle enhancement systems with smart diagnostics and performance optimization.',
        icon: '🚗',
        color: '#888888',
        features: ['Smart Diagnostics', 'Performance Tuning', 'Custom ECU Mapping'],
    },
];

export default function Roadmap() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section id="roadmap" className="section relative overflow-hidden" ref={containerRef}>
            <div className="bg-grid opacity-30" />

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#e60000] rounded-full blur-[200px] opacity-10" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#e60000] rounded-full blur-[200px] opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#e60000] font-medium mb-4 block uppercase tracking-wider text-sm">
                        What's Coming
                    </span>
                    <h2 className="section-title">
                        Hardware <span className="gradient-text">Roadmap</span>
                    </h2>
                    <p className="section-subtitle mt-4">
                        Our ambitious expansion into hardware begins in 2026.
                        Explore the innovations we're bringing to life.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-[#e60000] via-[#e60000] to-[#888888]"
                        />
                    </div>

                    {/* Timeline Items */}
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex items-center gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Content Card */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'} pl-12 md:pl-0`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-card p-8 inline-block text-left"
                                    style={{
                                        boxShadow: `0 0 40px ${item.color}20`
                                    }}
                                >
                                    {/* Year Badge */}
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
                                        style={{
                                            background: `${item.color}20`,
                                            color: item.color,
                                        }}
                                    >
                                        <span>{item.year}</span>
                                        <span className="w-1 h-1 rounded-full" style={{ background: item.color }} />
                                        <span>{item.quarter}</span>
                                    </div>

                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{item.icon}</span>
                                        <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[rgba(0,0,0,0.6)] mb-6 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.7)]"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Timeline Node */}
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                                style={{
                                    background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                                    boxShadow: `0 0 30px ${item.color}60`,
                                }}
                            >
                                <span className="text-2xl">{item.icon}</span>
                            </motion.div>

                            {/* Empty Space for Layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}

                    {/* Future Indicator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center mt-12"
                    >
                        <div className="glass px-8 py-4 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#e60000] animate-pulse" />
                            <span className="text-[rgba(0,0,0,0.7)] font-medium">More innovations coming in 2027...</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
