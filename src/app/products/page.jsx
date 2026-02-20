'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
    {
        title: 'qloque',
        description: 'Your link-in-bio platform — create a stunning page in seconds. Share everything you create, promote, and sell from one beautiful page.',
        tags: ['Link-in-Bio', 'Creator Tools', 'Social'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
        accentColor: '#7c3aed',
        isLive: true,
        link: 'https://qloque.space',
    },
    {
        title: 'ATS Friendly Resume Builder',
        description: 'Build professional, ATS-optimized resumes that pass automated screening systems and land you more interviews.',
        tags: ['ATS', 'Resume', 'Career'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden" style={{ background: 'var(--background)' }}>
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="bg-dot-grid absolute inset-0 opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link href="/#products" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-muted)' }}>
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        All <span className="gradient-text">Products</span>
                    </h1>
                    <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
                            className="group relative glass-card-dark p-8 flex flex-col h-full transition-colors duration-300"
                            style={{ backgroundColor: `${product.accentColor}08`, borderColor: `${product.accentColor}15` }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${product.accentColor}12`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${product.accentColor}08`; }}
                        >
                            {/* Number */}
                            <span className="absolute top-6 right-6 text-xs  font-mono tracking-wider text-gray-500" >
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
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#e60000] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                {product.title}
                            </h3>

                            {/* Description */}
                            <p className="leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-muted)' }}>
                                {product.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid var(--card-border)' }}>
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 rounded-full"
                                        style={{ background: 'var(--tag-bg)', color: 'var(--text-secondary)', border: '1px solid var(--tag-border)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Status badge */}
                            <div className="flex items-center gap-2 mt-6">
                                {product.isLive ? (
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium inline-flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-300"
                                        style={{ color: '#34d399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34d399' }} />
                                        Live — Visit
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#e60000] bg-[#e60000]/10 border border-[#e60000]/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e60000] animate-pulse" />
                                        Upcoming
                                    </span>
                                )}
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
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Interested in Our Products?</h2>
                        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
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
