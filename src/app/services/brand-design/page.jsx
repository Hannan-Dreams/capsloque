'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BrandDesign() {
    const features = [
        {
            title: 'Logo Design',
            description: 'Iconic, memorable logos that capture your brand essence and stand the test of time.',
            icon: '✨'
        },
        {
            title: 'Visual Identity',
            description: 'Comprehensive brand guidelines including colors, typography, and imagery.',
            icon: '🎨'
        },
        {
            title: 'Brand Strategy',
            description: 'Define your brand positioning, voice, and messaging for maximum impact.',
            icon: '🎯'
        },
        {
            title: 'Collateral Design',
            description: 'Business cards, letterheads, and marketing materials that wow.',
            icon: '📄'
        },
    ];

    const deliverables = ['Logo Package', 'Brand Guidelines', 'Color Palette', 'Typography System', 'Icon Set', 'Social Media Kit', 'Business Cards', 'Email Signature'];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#dddddd]/10 to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 text-[rgba(0,0,0,0.6)] hover:text-black mb-8 transition-colors">
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
                        <span className="text-[#dddddd] font-medium uppercase tracking-wider text-sm">Creative Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                            Brand <span className="gradient-text">Design</span>
                        </h1>
                        <p className="text-xl text-[rgba(0,0,0,0.7)] max-w-2xl leading-relaxed">
                            Create a powerful brand identity that resonates with your audience.
                            We design brands that are remembered, trusted, and loved.
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
                                className="glass-card p-8 group"
                            >
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                                <p className="text-[rgba(0,0,0,0.6)]">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">What You Get</h2>
                        <p className="text-[rgba(0,0,0,0.6)]">Complete brand package deliverables</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {deliverables.map((item, index) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-black font-medium hover:border-[#dddddd] hover:bg-[rgba(236,72,153,0.1)] transition-all cursor-default"
                            >
                                {item}
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
                        <h2 className="text-3xl font-bold text-black mb-4">Ready to Build Your Brand?</h2>
                        <p className="text-[rgba(0,0,0,0.6)] mb-8">
                            Let's create a visual identity that sets you apart from the competition.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Start Your Brand Journey
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
