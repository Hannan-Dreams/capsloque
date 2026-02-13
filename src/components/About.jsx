'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '50+', label: 'Projects Delivered', color: '#e60000' },
    { value: '100%', label: 'Client Satisfaction', color: '#e60000' },
    { value: '24/7', label: 'Support Available', color: '#e60000' },
];

export default function About() {

    return (
        <section id="about" className="section relative overflow-hidden" style={{ background: 'var(--background)' }}>
            <div className="bg-grid opacity-30" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e60000] rounded-full blur-[200px]" style={{ opacity: 'var(--orb-opacity)' }} />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#e60000] rounded-full blur-[200px]" style={{ opacity: 'var(--orb-opacity)' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
                    <span className="text-[#e60000] font-medium mb-4 block uppercase tracking-wider text-sm">About Us</span>
                    <h2 className="section-title">Who We <span className="gradient-text">Are</span></h2>
                    <p className="section-subtitle mt-4 px-4">A forward-thinking tech venture dedicated to building innovative solutions that shape the future of technology.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                        At <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Capsloque</span>, we believe in pushing the boundaries of what's possible. From cutting-edge web development and machine learning solutions to strategic brand design and marketing — we deliver excellence at every step.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Our vision extends beyond software. In 2026, we're expanding into hardware innovations including drones, smart home appliances, and automobile modifications.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="glass p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-center">
                        {stats.map((stat, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.05 }} className="group">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 transition-all duration-300" style={{ color: stat.color }}>{stat.value}</div>
                                <div className="text-xs sm:text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
