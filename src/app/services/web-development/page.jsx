'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WebDevelopment() {
    const features = [
        {
            title: 'Custom Web Applications',
            description: 'Tailored solutions built from scratch to meet your unique business requirements.',
            icon: '🎯'
        },
        {
            title: 'Responsive Design',
            description: 'Pixel-perfect interfaces that look stunning on every device and screen size.',
            icon: '📱'
        },
        {
            title: 'Performance Optimized',
            description: 'Lightning-fast load times with optimized code and efficient architectures.',
            icon: '⚡'
        },
        {
            title: 'SEO Ready',
            description: 'Built-in search engine optimization to boost your online visibility.',
            icon: '🔍'
        },
    ];

    const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'];

    return (
        <main className="min-h-screen pt-24 pb-20 bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/[0.06] to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">Our Expertise</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white">
                            Web <span className="gradient-text">Development</span>
                        </h1>
                        <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
                            We craft powerful, scalable web solutions that drive business growth.
                            From stunning websites to complex web applications, we bring your vision to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card-dark p-8 group"
                            >
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/40">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
                        <p className="text-white/40">Modern tools for modern solutions</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
                        <p className="text-white/40 mb-8">
                            Let's discuss your project and create a web solution that exceeds expectations.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Start Your Project
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
