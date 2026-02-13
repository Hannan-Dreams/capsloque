'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BrandDesign() {
    const features = [
        { title: 'Logo & Identity Design', description: 'A logo isn\'t just a symbol — it\'s the face of your business. We design iconic, versatile logos that forge instant recognition and emotional connection.', icon: '✨', gradient: 'from-[#ec4899] to-[#f472b6]' },
        { title: 'Complete Visual System', description: 'Colors, typography, imagery, patterns — we build a comprehensive design language that makes your brand instantly recognizable across every touchpoint.', icon: '🎨', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
        { title: 'Brand Strategy & Positioning', description: 'Before we design a single pixel, we define who you are, what you stand for, and why customers should choose you over everyone else.', icon: '🎯', gradient: 'from-[#e60000] to-[#ff4444]' },
        { title: 'Marketing Collateral', description: 'Business cards, pitch decks, social media kits, email templates — everything your team needs to represent your brand with confidence.', icon: '📄', gradient: 'from-[#06b6d4] to-[#67e8f9]' },
    ];

    const deliverables = ['Logo Package (All Formats)', 'Brand Guidelines Book', 'Color Palette & System', 'Typography Hierarchy', 'Custom Icon Set', 'Social Media Templates', 'Business Card Design', 'Email Signature', 'Letterhead & Stationery', 'Pitch Deck Template'];

    const stats = [
        { number: '100+', label: 'Brands Built' },
        { number: '3x', label: 'Avg. Brand Recall' },
        { number: '48h', label: 'First Concepts' },
        { number: '∞', label: 'Revisions Until Perfect' },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--background)' }}>
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/[0.04] to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Services
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">Creative Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>Brand <span className="gradient-text">Design</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            People don't buy products — <strong>they buy brands</strong>. In a world where first impressions happen in 0.05 seconds, your brand identity isn't just important —
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> it's everything.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(230, 0, 0, 0.04)', border: '1px solid rgba(230, 0, 0, 0.1)' }}>
                                <div className="text-3xl md:text-4xl font-bold text-[#e60000] mb-1">{stat.number}</div>
                                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pitch */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            A Strong Brand Doesn't Cost Money. <span className="text-[#e60000]">A Weak One Does.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            Think of the brands you trust — Apple, Nike, Tesla. They didn't become iconic by accident. Behind every great brand is a <strong>strategic visual identity</strong> that communicates trust, quality, and purpose before a single word is spoken.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            We don't just make things look pretty — we engineer brand experiences that make your audience <strong>feel something</strong>. Because in business, emotions drive decisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Create</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>From concept to complete brand ecosystem</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card-dark p-8 group relative overflow-hidden">
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Complete Brand Package</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Everything you need to launch and grow with confidence</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {deliverables.map((item, index) => (
                            <motion.span key={item} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >✓ {item}</motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/[0.03] to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Brand Is Speaking Right Now.<br /><span className="text-[#e60000]">What Is It Saying?</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>If you're not in control of your brand story, someone else is. Let's craft a visual identity that demands attention and earns trust.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Start Your Brand Transformation
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free brand audit • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
