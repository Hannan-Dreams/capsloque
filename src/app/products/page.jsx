'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
    {
        title: 'AI Chatbot Platform',
        description: 'Intelligent conversational AI that handles customer support 24/7 with human-like understanding.',
        tags: ['NLP', 'Customer Service', 'Automation'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        accentColor: '#e60000',
    },
    {
        title: 'Predictive Analytics Dashboard',
        description: 'Visual insights platform that forecasts business trends using historical data analysis.',
        tags: ['Visualization', 'Data Analysis', 'Forecasting'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        accentColor: '#ff6b35',
    },
    {
        title: 'Smart Document Processor',
        description: 'AI-powered document analysis that extracts, categorizes, and processes information automatically.',
        tags: ['OCR', 'Document AI', 'Processing'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        accentColor: '#8b5cf6',
    },
    {
        title: 'ML Pipeline Manager',
        description: 'End-to-end machine learning pipeline orchestration for training, deploying, and monitoring models.',
        tags: ['MLOps', 'Pipeline', 'Monitoring'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        accentColor: '#06b6d4',
    },
    {
        title: 'Real-Time Anomaly Detector',
        description: 'Continuous monitoring system that identifies unusual patterns and potential threats in real-time.',
        tags: ['Security', 'Real-Time', 'Detection'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        accentColor: '#10b981',
    },
    {
        title: 'Voice Intelligence Suite',
        description: 'Advanced speech recognition and voice analytics for call centers and voice-enabled applications.',
        tags: ['Speech AI', 'Voice', 'Analytics'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        accentColor: '#f59e0b',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="bg-dot-grid absolute inset-0 opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link href="/#products" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-3xl"
                >
                    <span className="text-[#e60000] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
                        Our Suite
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        All <span className="gradient-text">Products</span>
                    </h1>
                    <p className="text-xl text-white/50 leading-relaxed">
                        Explore our complete suite of AI-powered solutions built for modern businesses.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative glass-card-dark p-8 flex flex-col h-full"
                        >
                            {/* Number */}
                            <span className="absolute top-6 right-6 text-xs font-mono text-white/15 tracking-wider">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Gradient Top Accent */}
                            <div
                                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)` }}
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                                style={{
                                    backgroundColor: `${product.accentColor}15`,
                                    borderColor: `${product.accentColor}30`,
                                    color: product.accentColor,
                                }}
                            >
                                {product.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e60000] transition-colors duration-300">
                                {product.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/40 leading-relaxed mb-6 flex-grow">
                                {product.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] text-white/50 border border-white/[0.08]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Arrow */}
                            <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-sm font-medium text-white/60">Learn More</span>
                                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <div className="glass p-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Products?</h2>
                        <p className="text-white/50 mb-8">
                            Let's discuss how our AI solutions can transform your business operations.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Get in Touch
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
