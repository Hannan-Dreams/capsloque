'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SeoDigital() {
    const features = [
        { title: 'Technical SEO Audit', description: 'We crawl every corner of your website — broken links, slow pages, missing meta tags, crawl errors — and fix what\'s silently killing your rankings.', icon: '🔧', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
        { title: 'On-Page & Content SEO', description: 'Strategic keyword research, optimized title tags, compelling meta descriptions, and content that ranks. We make Google fall in love with your pages.', icon: '📝', gradient: 'from-[#e60000] to-[#ff4444]' },
        { title: 'Local & Maps SEO', description: 'Dominate your local market. Google Business optimization, local citations, review management, and geo-targeted content that drives foot traffic.', icon: '📍', gradient: 'from-[#10b981] to-[#34d399]' },
        { title: 'Analytics & Reporting', description: 'Real-time dashboards showing rankings, traffic, conversions, and ROI. No vanity metrics — only data that matters to your bottom line.', icon: '📊', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
    ];

    const tactics = ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Content Strategy', 'Core Web Vitals', 'Schema Markup', 'Google Business Profile', 'Competitor Analysis', 'Rank Tracking', 'Conversion Rate Optimization'];

    const stats = [
        { number: '150%', label: 'Avg. Traffic Increase' },
        { number: 'Page 1', label: 'Ranking Results' },
        { number: '40+', label: 'Sites Optimized' },
        { number: '10x', label: 'Organic Lead Growth' },
    ];

    const process = [
        { step: '01', title: 'Deep-Dive Audit', desc: 'Comprehensive technical, on-page, and competitive analysis to find every opportunity and gap.' },
        { step: '02', title: 'Strategy & Roadmap', desc: 'Prioritized action plan with quick wins and long-term plays tailored to your market and budget.' },
        { step: '03', title: 'Execute & Optimize', desc: 'On-page fixes, content creation, link earning, and continuous optimization based on real data.' },
        { step: '04', title: 'Report & Scale', desc: 'Monthly performance reports with clear ROI metrics and strategic recommendations for next steps.' },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--background)' }}>
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/[0.04] to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Services
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[#8b5cf6] font-medium uppercase tracking-wider text-sm">Search & Visibility</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>SEO & <span className="gradient-text">Digital Presence</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            If you're not on the first page of Google, you're invisible. 75% of users never scroll past page 1.
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> We make sure you're the first thing they see.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(139, 92, 246, 0.04)', border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                                <div className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-1">{stat.number}</div>
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
                            The Best Place to Hide a Dead Body? <span className="text-[#8b5cf6]">Page 2 of Google.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            It's a classic joke in SEO — but it's deadly serious for your business. <strong>93% of online experiences begin with a search engine</strong>. If your website isn't ranking for the terms your customers are searching, you're handing business to your competitors on a silver platter.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            We don't do black-hat tricks or shortcut strategies. We build <strong>sustainable, ethical SEO systems</strong> that compound over time — driving organic traffic that keeps growing month after month, without paying for every click.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>How We Boost Your Rankings</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>A full-stack SEO approach that covers every angle</p>
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

            {/* Process */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our SEO Process</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Systematic, transparent, results-driven</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {process.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                                <div className="text-5xl font-bold text-[#8b5cf6]/20 mb-3">{item.step}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tactics */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our SEO Toolkit</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Every lever we pull to get you to the top</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tactics.map((tactic, index) => (
                            <motion.span key={tactic} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >{tactic}</motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/[0.03] to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Right Now, Someone Is Googling What You Sell.<br /><span className="text-[#8b5cf6]">Will They Find You or Your Competitor?</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>Every day without SEO is a day your competitors are capturing the traffic and leads that should be yours. Let's fix that.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Get Your Free SEO Audit
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free SEO audit • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
