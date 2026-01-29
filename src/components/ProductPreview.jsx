'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function ProductPreview() {
    const scrollRef = useRef(null);

    const products = [
        {
            title: 'AI Chatbot Platform',
            description: 'Intelligent conversational AI that handles customer support 24/7 with human-like understanding.',
            tags: ['NLP', 'Customer Service', 'Automation'],
            icon: '💬'
        },
        {
            title: 'Predictive Analytics Dashboard',
            description: 'Visual insights platform that forecasts business trends using historical data analysis.',
            tags: ['Visualization', 'Data Analysis', 'Forecasting'],
            icon: '📊'
        },
        {
            title: 'Image Recognition API',
            description: 'Robust API for identifying objects, faces, and text in images and videos.',
            tags: ['Computer Vision', 'API', 'Security'],
            icon: '👁️'
        },
        {
            title: 'Fraud Detection Suite',
            description: 'Real-time transaction monitoring system to detect and prevent fraudulent activities.',
            tags: ['Security', 'FinTech', 'Real-time'],
            icon: '🛡️'
        },
        {
            title: 'Smart Inventory System',
            description: 'AI-powered inventory management that predicts demand and optimizes stock levels automatically.',
            tags: ['Supply Chain', 'Automation', 'AI'],
            icon: '📦'
        },
        {
            title: 'Voice Analytics Engine',
            description: 'Advanced speech-to-text and sentiment analysis for call centers and voice applications.',
            tags: ['Voice AI', 'Analytics', 'NLP'],
            icon: '🎙️'
        },
        {
            title: 'Document Intelligence',
            description: 'Extract, classify, and process documents automatically with OCR and ML capabilities.',
            tags: ['OCR', 'Automation', 'Enterprise'],
            icon: '📄'
        },
        {
            title: 'Recommendation Engine',
            description: 'Personalized product and content recommendations that boost engagement and conversions.',
            tags: ['E-commerce', 'ML', 'Personalization'],
            icon: '🎯'
        },
        {
            title: 'Anomaly Detection Platform',
            description: 'Detect unusual patterns in data streams for security, maintenance, and quality control.',
            tags: ['IoT', 'Security', 'Monitoring'],
            icon: '🔍'
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-[rgba(0,0,0,0.02)] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                            Our <span className="gradient-text">Products</span>
                        </h2>
                        <p className="text-[rgba(0,0,0,0.6)] max-w-xl">
                            Discover our suite of intelligent AI solutions designed to transform your business operations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        {/* Scroll Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-black hover:bg-[rgba(0,212,255,0.1)] hover:border-[#e60000]/30 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-black hover:bg-[rgba(0,212,255,0.1)] hover:border-[#e60000]/30 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <Link href="/products" className="btn-primary inline-flex items-center gap-2">
                            View All Products
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory items-stretch"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex-shrink-0 w-[300px] snap-start glass-card p-6 border border-[rgba(0,0,0,0.05)] hover:border-[#e60000]/30 transition-all duration-300 group h-[220px]"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{product.icon}</span>
                                    <div className="w-8 h-8 rounded-full bg-[rgba(0,0,0,0.05)] flex items-center justify-center group-hover:bg-[#e60000]/10 transition-colors">
                                        <svg className="w-4 h-4 text-black group-hover:text-[#e60000] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-black mb-2 line-clamp-1">{product.title}</h3>
                                <p className="text-[rgba(0,0,0,0.6)] text-sm mb-4 line-clamp-3 flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {product.tags.slice(0, 2).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(0,212,255,0.1)] text-[#e60000] border border-[rgba(0,212,255,0.2)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {product.tags.length > 2 && (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,0.5)]">
                                            +{product.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Indicator for mobile */}
                <div className="flex justify-center mt-6 md:hidden">
                    <p className="text-[rgba(0,0,0,0.4)] text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        Swipe to explore more
                    </p>
                </div>
            </div>
        </section>
    );
}
