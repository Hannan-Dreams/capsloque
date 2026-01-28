'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MarketingStrategy() {
    const features = [
        {
            title: 'Market Research',
            description: 'Deep dive analysis of your target audience, competitors, and market opportunities.',
            icon: '🔍'
        },
        {
            title: 'Campaign Strategy',
            description: 'Data-driven marketing campaigns that maximize reach and ROI.',
            icon: '🎯'
        },
        {
            title: 'Social Media Marketing',
            description: 'Engaging content strategies across all major social platforms.',
            icon: '📱'
        },
        {
            title: 'Performance Analytics',
            description: 'Comprehensive reporting and insights to optimize your marketing spend.',
            icon: '📊'
        },
    ];

    const channels = ['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Email Marketing', 'Content Marketing', 'SEO', 'Influencer Marketing'];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bbbbbb]/10 to-transparent" />
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
                        <span className="text-[#bbbbbb] font-medium uppercase tracking-wider text-sm">Growth Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                            Marketing <span className="gradient-text">Strategy</span>
                        </h1>
                        <p className="text-xl text-[rgba(0,0,0,0.7)] max-w-2xl leading-relaxed">
                            Amplify your brand and accelerate growth with data-driven marketing
                            strategies that deliver measurable results.
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

            {/* Marketing Channels */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Marketing Channels</h2>
                        <p className="text-[rgba(0,0,0,0.6)]">We optimize across all major platforms</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {channels.map((channel, index) => (
                            <motion.span
                                key={channel}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] text-black font-medium hover:border-[#bbbbbb] hover:bg-[rgba(245,158,11,0.1)] transition-all cursor-default"
                            >
                                {channel}
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
                        <h2 className="text-3xl font-bold text-black mb-4">Ready to Scale Your Business?</h2>
                        <p className="text-[rgba(0,0,0,0.6)] mb-8">
                            Let's create a marketing strategy that drives real, measurable growth.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Get Your Strategy
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
