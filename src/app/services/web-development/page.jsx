'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WebDevelopment() {
    const features = [
        {
            title: 'Custom Web Applications',
            description: 'From complex SaaS platforms to dynamic web portals — we architect and build scalable applications that solve real business problems and delight users.',
            icon: '🎯',
            gradient: 'from-[#e60000] to-[#ff4444]',
        },
        {
            title: 'Responsive & Adaptive Design',
            description: 'Every pixel matters. We craft interfaces that look stunning and perform flawlessly across desktops, tablets, and mobile — no compromises.',
            icon: '📱',
            gradient: 'from-[#8b5cf6] to-[#a78bfa]',
        },
        {
            title: 'Performance Engineering',
            description: 'Speed converts. Our sites load in under 2 seconds with optimized code, lazy loading, CDN integration, and server-side rendering for peak performance.',
            icon: '⚡',
            gradient: 'from-[#f59e0b] to-[#fbbf24]',
        },
        {
            title: 'SEO & Accessibility Built-In',
            description: 'We don\'t bolt on SEO — we bake it in. Semantic HTML, structured data, Core Web Vitals optimization, and WCAG accessibility from day one.',
            icon: '🔍',
            gradient: 'from-[#06b6d4] to-[#67e8f9]',
        },
    ];

    const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'];

    const process = [
        { step: '01', title: 'Discovery & Strategy', desc: 'We deep-dive into your business goals, audience, and competitors to build a winning strategy.' },
        { step: '02', title: 'UX/UI Design', desc: 'Wireframes, prototypes, and pixel-perfect designs that align with your brand vision.' },
        { step: '03', title: 'Agile Development', desc: 'Sprint-based development with weekly demos, so you see progress and can give feedback in real-time.' },
        { step: '04', title: 'Launch & Scale', desc: 'Rigorous QA, deployment, performance monitoring, and ongoing support to keep you growing.' },
    ];

    const stats = [
        { number: '50+', label: 'Projects Delivered' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '5★', label: 'Client Reviews' },
        { number: '24/7', label: 'Support Available' },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--background)' }}>
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/[0.04] to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Services
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">Our Expertise</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>
                            Web <span className="gradient-text">Development</span>
                        </h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Your website is your most powerful salesperson — it works 24/7, never takes a day off, and speaks to thousands at once.
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> We make sure it closes the deal.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
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

            {/* Why Choose Us Pitch */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            Don't Just Build a Website. <span className="text-[#e60000]">Build a Growth Engine.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            Most agencies deliver a website. We deliver a <strong>revenue machine</strong>. Every line of code, every design choice, every interaction is engineered to convert visitors into customers. We combine modern technology stacks with battle-tested UX principles to create digital experiences that don't just look beautiful — they <strong>perform</strong>.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Whether you're a startup launching your first product or an enterprise modernizing legacy systems, we have the expertise to take you from concept to market-leader.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Deliver</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>End-to-end web solutions, no shortcuts</p>
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

            {/* Our Process */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our Proven Process</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Transparent, collaborative, and results-driven</p>
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

            {/* Technologies */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our Tech Arsenal</h2>
                        <p style={{ color: 'var(--text-muted)' }}>We pick the right tools for your project — not just the trendiest ones</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >{tech}</motion.span>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Competitors Are Already Online. <br /><span className="text-[#e60000]">Are You Keeping Up?</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>Every day without a high-performing website is a day your competitors are winning customers that could be yours. Let's change that.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Let's Build Your Website
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free consultation • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
