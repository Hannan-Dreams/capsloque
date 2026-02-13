'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ShopifyStores() {
    const features = [
        { title: 'Custom Store Design', description: 'No templates, no shortcuts. We design bespoke Shopify storefronts that reflect your brand\'s personality and are engineered to convert browsers into buyers.', icon: '🎨', gradient: 'from-[#10b981] to-[#34d399]' },
        { title: 'Payment & Checkout Optimization', description: 'Every step in checkout is a chance to lose a sale. We optimize payment flows, add trust signals, and reduce cart abandonment by up to 40%.', icon: '💳', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
        { title: 'Inventory & Order Management', description: 'Automated stock tracking, supplier integrations, and fulfillment workflows that scale as you grow — from 10 orders to 10,000 a day.', icon: '📦', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
        { title: 'Analytics & Growth Tools', description: 'Customer behavior tracking, sales dashboards, email automation, and upsell funnels — everything you need to maximize lifetime customer value.', icon: '📈', gradient: 'from-[#e60000] to-[#ff4444]' },
    ];

    const benefits = ['Mobile-First Design', 'Sub-2s Load Speed', 'SEO Optimized', 'PCI-DSS Compliant', '99.99% Uptime', 'Easy Product Updates', 'Multi-Currency Support', 'Abandoned Cart Recovery'];

    const stats = [
        { number: '$2M+', label: 'Revenue Generated' },
        { number: '35%', label: 'Avg. Conversion Lift' },
        { number: '200+', label: 'Products Launched' },
        { number: '40%', label: 'Cart Recovery Rate' },
    ];

    const process = [
        { step: '01', title: 'Store Strategy', desc: 'We analyze your products, target market, and competitors to craft a winning e-commerce strategy.' },
        { step: '02', title: 'Design & Build', desc: 'Custom theme development, product page optimization, and conversion-focused UX design.' },
        { step: '03', title: 'Apps & Integrations', desc: 'Payment gateways, shipping calculators, email tools, and analytics — all connected seamlessly.' },
        { step: '04', title: 'Launch & Optimize', desc: 'Soft launch, A/B testing, performance tuning, and ongoing conversion rate optimization.' },
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
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">E-Commerce Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>Shopify <span className="gradient-text">Stores</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            E-commerce isn't just about selling online — it's about building a <strong>24/7 revenue machine</strong>.
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> We build stores that sell while you sleep.</span>
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
                            A Beautiful Store That Doesn't Convert <span className="text-[#e60000]">Is Just an Expensive Brochure.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            We've seen it too many times — gorgeous online stores with zero sales. The difference between a store that sits pretty and one that prints money is <strong>conversion engineering</strong>. Every element we design, every interaction we build, is backed by e-commerce psychology and real data.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            From your product pages to your checkout flow, from your email sequences to your upsell funnels — we optimize <strong>the entire customer journey</strong> to maximize revenue per visitor.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Build</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>End-to-end e-commerce, engineered for profit</p>
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
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>From Zero to Revenue</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Our proven launch framework</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {process.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                                <div className="text-5xl font-bold text-[#e60000]/20 mb-3">{item.step}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Every Store Comes With</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Non-negotiable features included in every build</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.span key={benefit} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >✓ {benefit}</motion.span>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Every Minute Without a Store<br /><span className="text-[#e60000]">Is Revenue Left on the Table.</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>The e-commerce market is worth $6.3 trillion — and growing. Whether you're launching your first product or scaling an existing brand, now is the time.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Launch Your Store
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free store audit • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
