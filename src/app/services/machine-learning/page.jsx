'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MachineLearning() {
    const features = [
        {
            title: 'Predictive Analytics',
            description: 'Harness the power of data to forecast trends and make informed business decisions.',
            icon: '📊'
        },
        {
            title: 'Natural Language Processing',
            description: 'Build intelligent chatbots and text analysis systems that understand human language.',
            icon: '💬'
        },
        {
            title: 'Computer Vision',
            description: 'Image recognition and visual AI solutions for automation and insights.',
            icon: '👁️'
        },
        {
            title: 'Custom AI Models',
            description: 'Tailored machine learning models designed specifically for your use case.',
            icon: '🧠'
        },
    ];

    const useCases = ['Fraud Detection', 'Recommendation Systems', 'Sentiment Analysis', 'Demand Forecasting', 'Image Classification', 'Anomaly Detection'];



    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/10 to-transparent" />
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
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">AI-Powered Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                            Machine <span className="gradient-text">Learning</span>
                        </h1>
                        <p className="text-xl text-[rgba(0,0,0,0.7)] max-w-2xl leading-relaxed">
                            Transform your business with intelligent AI solutions that learn, adapt,
                            and deliver actionable insights from your data.
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



            {/* Use Cases */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Industry Applications</h2>
                        <p className="text-[rgba(0,0,0,0.6)]">AI solutions across various domains</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {useCases.map((useCase, index) => (
                            <motion.span
                                key={useCase}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-black font-medium hover:border-[#e60000] hover:bg-[rgba(0,212,255,0.1)] transition-all cursor-default"
                            >
                                {useCase}
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
                        <h2 className="text-3xl font-bold text-black mb-4">Ready to Embrace AI?</h2>
                        <p className="text-[rgba(0,0,0,0.6)] mb-8">
                            Let's explore how machine learning can revolutionize your business operations.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Discuss Your AI Project
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
