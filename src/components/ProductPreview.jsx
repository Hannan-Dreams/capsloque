'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
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
        description: 'Visual insights platform that forecasts business trends using historical data analysis and machine learning models.',
        tags: ['Visualization', 'Data Analysis', 'Forecasting'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        accentColor: '#ff6b35',
    },
    {
        title: 'Image Recognition API',
        description: 'Robust API for identifying objects, faces, and text in images and videos with enterprise-grade accuracy.',
        tags: ['Computer Vision', 'API', 'Security'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        accentColor: '#8b5cf6',
    },
    {
        title: 'Fraud Detection Suite',
        description: 'Real-time transaction monitoring system to detect and prevent fraudulent activities using behavioral analytics.',
        tags: ['Security', 'FinTech', 'Real-time'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        accentColor: '#06b6d4',
    },
    {
        title: 'Smart Inventory System',
        description: 'AI-powered inventory management that predicts demand and optimizes stock levels automatically.',
        tags: ['Supply Chain', 'Automation', 'AI'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        accentColor: '#10b981',
    },
    {
        title: 'Voice Analytics Engine',
        description: 'Advanced speech-to-text and sentiment analysis for call centers and voice applications.',
        tags: ['Voice AI', 'Analytics', 'NLP'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        accentColor: '#f59e0b',
    },
    {
        title: 'Document Intelligence',
        description: 'Extract, classify, and process documents automatically with OCR and advanced ML capabilities.',
        tags: ['OCR', 'Automation', 'Enterprise'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        accentColor: '#ec4899',
    },
    {
        title: 'Recommendation Engine',
        description: 'Personalized product and content recommendations that boost engagement and conversions.',
        tags: ['E-commerce', 'ML', 'Personalization'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        accentColor: '#e60000',
    },
    {
        title: 'Anomaly Detection Platform',
        description: 'Detect unusual patterns in data streams for security, maintenance, and quality control.',
        tags: ['IoT', 'Security', 'Monitoring'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
        ),
        accentColor: '#6366f1',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export default function ProductPreview() {
    const numberColor = 'rgba(0,0,0,0.04)';
    const numberHoverColor = 'rgba(0,0,0,0.08)';

    return (
        <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: 'var(--background)' }}>
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#e60000] blur-[150px] rounded-full" style={{ opacity: 'var(--orb-opacity)' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#e60000] blur-[130px] rounded-full" style={{ opacity: 'var(--orb-opacity)' }} />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e60000] blur-[200px] rounded-full" style={{ opacity: '0.02' }} />
                <div className="absolute inset-0 bg-dot-grid opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <span className="text-[#e60000] font-semibold mb-6 block uppercase tracking-[0.2em] text-sm">
                        Our Suite
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                        Powerful <span className="gradient-text">Products</span> Built for Scale
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Discover our suite of intelligent AI solutions designed to transform your business operations and drive measurable results.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {products.slice(0, 2).map((product, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative glass-card-dark p-8 flex flex-col h-full transition-colors duration-300"
                            style={{ backgroundColor: `${product.accentColor}08`, borderColor: `${product.accentColor}15` }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${product.accentColor}12`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${product.accentColor}08`; }}
                        >
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)` }}
                            />

                            {/* Product number */}
                            <span
                                className="absolute top-6 right-8 text-6xl font-bold leading-none select-none transition-colors duration-500"
                                style={{ color: numberColor }}
                                onMouseEnter={() => { }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg relative z-10"
                                style={{
                                    background: `linear-gradient(135deg, ${product.accentColor}22, ${product.accentColor}11)`,
                                    border: `1px solid ${product.accentColor}33`,
                                    boxShadow: `0 0 0px ${product.accentColor}00`,
                                }}
                            >
                                <div style={{ color: product.accentColor }}>
                                    {product.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 relative z-10" style={{ color: 'var(--text-primary)' }}>
                                {product.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-6 flex-grow relative z-10" style={{ color: 'var(--text-muted)' }}>
                                {product.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                {product.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-[11px] font-medium px-3 py-1 rounded-full border transition-colors duration-300"
                                        style={{
                                            color: `${product.accentColor}`,
                                            borderColor: `${product.accentColor}33`,
                                            background: `${product.accentColor}0a`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Upcoming badge on hover */}
                            <div
                                className="relative z-10 mt-auto pt-4 flex items-center justify-between"
                                style={{ borderTop: '1px solid var(--border-subtle)' }}
                            >
                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#e60000] bg-[#e60000]/10 border border-[#e60000]/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e60000] animate-pulse" />
                                    Upcoming
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/products"
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#e60000] to-[#cc0000] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(230,0,0,0.35)] hover:-translate-y-1"
                    >
                        <span className="relative z-10">View All Products</span>
                        <svg
                            className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
