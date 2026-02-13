'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumeReview() {
    const features = [
        { title: 'ATS Optimization', description: 'Over 75% of resumes get rejected by software before a human ever sees them. We reverse-engineer ATS algorithms to make sure yours gets through.', icon: '✅', gradient: 'from-[#10b981] to-[#34d399]' },
        { title: 'Industry-Specific Formatting', description: 'A tech resume looks different from a finance resume. We tailor your format, keywords, and structure to match exactly what your target recruiters expect.', icon: '📋', gradient: 'from-[#06b6d4] to-[#67e8f9]' },
        { title: 'Impact-Driven Content', description: 'We transform boring job descriptions into powerful achievement statements. Numbers, results, and impact — the language that hiring managers can\'t ignore.', icon: '🔑', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
        { title: 'Personal Branding', description: 'Your resume isn\'t just a document — it\'s your marketing pitch. We craft a compelling professional narrative that positions you as the obvious choice.', icon: '⭐', gradient: 'from-[#e60000] to-[#ff4444]' },
    ];

    const packages = [
        { name: 'Essential Review', price: '$49', features: ['ATS Compatibility Check', 'Format & Layout Review', 'Grammar & Clarity Edit', '1 Round of Revisions', 'Delivery in 48 hours'], popular: false },
        { name: 'Professional Rewrite', price: '$99', features: ['Complete Resume Rewrite', 'Cover Letter Included', 'LinkedIn Profile Tips', 'Keyword Optimization', '3 Rounds of Revisions', 'Delivery in 72 hours'], popular: true },
        { name: 'Executive Package', price: '$199', features: ['Everything in Professional', 'Portfolio/Website Review', 'Interview Prep Guide', 'Networking Strategy', 'Unlimited Revisions', 'Priority 24h Delivery'], popular: false },
    ];

    const stats = [
        { number: '3x', label: 'More Interviews' },
        { number: '500+', label: 'Resumes Optimized' },
        { number: '89%', label: 'ATS Pass Rate' },
        { number: '48h', label: 'Turnaround Time' },
    ];

    const industries = ['Software Engineering', 'Data Science & AI', 'Product Management', 'Marketing & Sales', 'Finance & Banking', 'Healthcare', 'Consulting', 'Design & Creative'];

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
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">Career Services</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>Resume <span className="gradient-text">Review</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            You might be the perfect candidate — but if your resume doesn't prove it in <strong>6 seconds</strong>, you'll never get the chance.
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> We make those seconds count.</span>
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
                            A Bad Resume Doesn't Get Rejected. <span className="text-[#e60000]">It Gets Ignored.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            The average recruiter spends <strong>6-7 seconds</strong> on a resume. In that time, they decide if you're worth a call or headed for the reject pile. The problem? Most resumes are written by the candidate, for the candidate. We write them for the <strong>recruiter</strong>.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Our team of career strategists and ATS experts has helped hundreds of professionals land interviews at top companies. We know what works because we've been on both sides of the hiring table.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Fix</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>The four pillars of a winning resume</p>
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

            {/* Pricing */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Investment in Your Future</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>One great resume can change your entire career trajectory</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`glass-card-dark p-8 text-center relative overflow-hidden ${pkg.popular ? 'ring-2 ring-[#e60000] scale-105' : ''}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-0 right-0 bg-[#e60000] text-white text-xs font-bold py-1.5 tracking-wider uppercase">Most Popular</div>
                                )}
                                <div className={pkg.popular ? 'mt-4' : ''}>
                                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{pkg.name}</h3>
                                    <div className="text-4xl font-bold text-[#e60000] mb-6">{pkg.price}</div>
                                    <ul className="space-y-3 mb-8 text-left">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                <span className="text-[#e60000] mt-0.5 flex-shrink-0">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/#contact" className={pkg.popular ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Industries We Specialize In</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Tailored expertise for your field</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((industry, index) => (
                            <motion.span key={industry} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >{industry}</motion.span>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Dream Job Exists.<br /><span className="text-[#e60000]">Your Resume Just Needs to Get You There.</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>Stop second-guessing your resume. Let professionals who know exactly what recruiters look for transform your application into an interview magnet.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Submit Your Resume
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free resume scoring • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
