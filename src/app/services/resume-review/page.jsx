'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumeReview() {
    const features = [
        {
            title: 'ATS Optimization',
            description: 'Ensure your resume passes Applicant Tracking Systems and reaches human recruiters.',
            icon: '✅'
        },
        {
            title: 'Industry-Specific Formatting',
            description: 'Tailored resume structures that match your target industry standards.',
            icon: '📋'
        },
        {
            title: 'Keyword Enhancement',
            description: 'Strategic keyword placement to match job descriptions and boost visibility.',
            icon: '🔑'
        },
        {
            title: 'Personal Branding',
            description: 'Craft a compelling professional narrative that makes you stand out.',
            icon: '⭐'
        },
    ];

    const packages = [
        { name: 'Basic Review', price: '$49', features: ['ATS Check', 'Format Review', '1 Revision'] },
        { name: 'Professional', price: '$99', features: ['Full Rewrite', 'Cover Letter', '3 Revisions', 'LinkedIn Tips'] },
        { name: 'Executive', price: '$199', features: ['Everything in Pro', 'Portfolio Review', 'Interview Prep', 'Unlimited Revisions'] },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#888888]/10 to-transparent" />
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
                        <span className="text-[#888888] font-medium uppercase tracking-wider text-sm">Career Services</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                            Resume <span className="gradient-text">Review</span>
                        </h1>
                        <p className="text-xl text-[rgba(0,0,0,0.7)] max-w-2xl leading-relaxed">
                            Land your dream job with a professionally optimized resume.
                            Our experts transform your experience into a compelling story.
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

            {/* Pricing */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Choose Your Package</h2>
                        <p className="text-[rgba(0,0,0,0.6)]">Investment in your future career</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass-card p-8 text-center ${index === 1 ? 'border-[#888888] scale-105' : ''}`}
                            >
                                <h3 className="text-xl font-semibold text-black mb-2">{pkg.name}</h3>
                                <div className="text-4xl font-bold text-[#888888] mb-6">{pkg.price}</div>
                                <ul className="space-y-3 text-[rgba(0,0,0,0.6)] mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center justify-center gap-2">
                                            <span className="text-[#aaaaaa]">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/#contact" className="btn-secondary w-full justify-center">
                                    Get Started
                                </Link>
                            </motion.div>
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
                        <h2 className="text-3xl font-bold text-black mb-4">Ready to Upgrade Your Career?</h2>
                        <p className="text-[rgba(0,0,0,0.6)] mb-8">
                            Get a professional resume that opens doors to new opportunities.
                        </p>
                        <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                            Submit Your Resume
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
