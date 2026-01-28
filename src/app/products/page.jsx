'use client';

import { motion } from 'framer-motion';

export default function Products() {
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

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/10 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">Innovating the Future</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                            Our <span className="gradient-text">Products</span>
                        </h1>
                        <p className="text-xl text-[rgba(0,0,0,0.7)] max-w-2xl mx-auto leading-relaxed">
                            Explore our suite of AI-powered solutions designed to transform your business and drive innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-8 border border-[rgba(0,0,0,0.05)] hover:border-[#e60000]/30 transition-all duration-300 group"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-4xl">{product.icon}</span>
                                        <div className="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.05)] flex items-center justify-center group-hover:bg-[#e60000]/10 transition-colors">
                                            <svg className="w-5 h-5 text-black group-hover:text-[#e60000] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-black mb-3">{product.title}</h3>
                                    <p className="text-[rgba(0,0,0,0.6)] mb-6 flex-grow">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {product.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs px-3 py-1 rounded-full bg-[rgba(0,212,255,0.1)] text-[#e60000] border border-[rgba(0,212,255,0.2)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
