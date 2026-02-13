'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StartupMvp() {
    const features = [
        { title: 'Rapid Prototyping', description: 'From napkin sketch to interactive prototype in days, not months. We validate your idea fast so you can learn, iterate, and move before the window closes.', icon: '⚡', gradient: 'from-[#06b6d4] to-[#67e8f9]' },
        { title: 'MVP Development', description: 'We build the leanest possible version of your product that solves the core problem. Ship fast, get real users, and let data guide your next moves.', icon: '🚀', gradient: 'from-[#e60000] to-[#ff4444]' },
        { title: 'Scalable Architecture', description: 'Your MVP won\'t crumble at 10,000 users. We build with scalability in mind from day one — microservices, cloud-native, and ready to grow.', icon: '🏗️', gradient: 'from-[#10b981] to-[#34d399]' },
        { title: 'Investor-Ready Polish', description: 'Your product needs to impress VCs and early adopters. We deliver polished UX, solid metrics dashboards, and pitch-deck-worthy demos.', icon: '💼', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
    ];

    const techStack = ['React / Next.js', 'React Native', 'Node.js', 'Python / FastAPI', 'AWS / GCP', 'Firebase', 'Stripe Integration', 'MongoDB / PostgreSQL', 'Docker / K8s', 'CI/CD Pipelines'];

    const stats = [
        { number: '30+', label: 'MVPs Launched' },
        { number: '4 Weeks', label: 'Avg. MVP Timeline' },
        { number: '$2M+', label: 'Funding Raised by Clients' },
        { number: '85%', label: 'Market Fit Success Rate' },
    ];

    const process = [
        { step: '01', title: 'Ideation Sprint', desc: 'We validate your idea, define the core value proposition, and map out the minimum feature set to prove market fit.' },
        { step: '02', title: 'Design Sprint', desc: '5-day design sprint producing wireframes, user flows, and a clickable prototype you can show investors and test with users.' },
        { step: '03', title: 'Build Sprint', desc: 'Agile 2-week sprints with daily standups. You see working features every week and can pivot immediately if needed.' },
        { step: '04', title: 'Launch & Learn', desc: 'Deploy to production, set up analytics, gather user feedback, and iterate. We stay with you through the critical early phase.' },
    ];

    return (
        <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--background)' }}>
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/[0.04] to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Services
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[#06b6d4] font-medium uppercase tracking-wider text-sm">Startup Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>Startup MVP & <span className="gradient-text">Scaling</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Ideas are worthless. <strong>Execution is everything.</strong> We turn startup visions into working products that attract users, impress investors, and
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> generate revenue — fast.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px solid rgba(6, 182, 212, 0.1)' }}>
                                <div className="text-3xl md:text-4xl font-bold text-[#06b6d4] mb-1">{stat.number}</div>
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
                            Perfection Is the Enemy of <span className="text-[#06b6d4]">Progress.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            Most startups fail not because of bad ideas, but because they <strong>spend too long building and too little time shipping</strong>. We've helped founders go from concept to paying customers in as little as 4 weeks — with MVPs that are lean enough to test, but polished enough to impress.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            We've been in the trenches with founders raising seed rounds, onboarding first users, and scaling past product-market fit. We know what it takes because <strong>we've lived it</strong>. Your startup isn't just another project to us — it's a mission we sign up for.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>What We Bring to Your Startup</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Your technical co-founder, without giving up equity</p>
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
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Idea to Launch in 4 Sprints</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Fast, focused, and founder-friendly</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {process.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                                <div className="text-5xl font-bold text-[#06b6d4]/20 mb-3">{item.step}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Built With Proven Technology</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Startup-fast, enterprise-ready</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all cursor-default"
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
                        <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/[0.03] to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Idea Has an Expiry Date.<br /><span className="text-[#06b6d4]">Ship Before Someone Else Does.</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>The startup graveyard is full of brilliant ideas that moved too slowly. Don't let yours be next. Let's build your MVP and get to market — fast.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Launch Your Startup
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free idea validation call • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
