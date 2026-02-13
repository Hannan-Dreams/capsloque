'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MachineLearning() {
    const features = [
        { title: 'Predictive Analytics', description: 'Stop guessing, start knowing. Our ML models analyze massive datasets to forecast trends, customer behavior, and market shifts with remarkable accuracy.', icon: '📊', gradient: 'from-[#06b6d4] to-[#67e8f9]' },
        { title: 'Natural Language Processing', description: 'From intelligent chatbots to sentiment analysis — we build systems that understand, interpret, and respond to human language at scale.', icon: '💬', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
        { title: 'Computer Vision', description: 'Teach machines to see. Image recognition, object detection, quality inspection — our CV solutions automate visual tasks with superhuman precision.', icon: '👁️', gradient: 'from-[#e60000] to-[#ff4444]' },
        { title: 'Custom AI Models', description: 'Off-the-shelf AI won\'t cut it. We design, train, and deploy custom models specifically engineered for your unique data and business challenges.', icon: '🧠', gradient: 'from-[#10b981] to-[#34d399]' },
    ];

    const useCases = ['Fraud Detection', 'Recommendation Engines', 'Sentiment Analysis', 'Demand Forecasting', 'Image Classification', 'Anomaly Detection', 'Document Processing', 'Voice Recognition'];

    const stats = [
        { number: '85%', label: 'Accuracy Improvement' },
        { number: '3x', label: 'Faster Decision Making' },
        { number: '60%', label: 'Cost Reduction' },
        { number: '10M+', label: 'Data Points Processed' },
    ];

    const process = [
        { step: '01', title: 'Data Audit', desc: 'We analyze your existing data landscape, identify opportunities, and define clear ML objectives.' },
        { step: '02', title: 'Model Design', desc: 'Custom architecture, feature engineering, and algorithm selection tailored to your problem space.' },
        { step: '03', title: 'Train & Validate', desc: 'Rigorous training cycles with cross-validation to ensure your model performs reliably in production.' },
        { step: '04', title: 'Deploy & Monitor', desc: 'Seamless integration into your systems with continuous monitoring and automatic retraining pipelines.' },
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
                        <span className="text-[#e60000] font-medium uppercase tracking-wider text-sm">AI-Powered Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ color: 'var(--text-primary)' }}>Machine <span className="gradient-text">Learning</span></h1>
                        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            The companies that will dominate the next decade are the ones leveraging AI today. Your data is a goldmine —
                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> we help you mine it.</span>
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
                            AI Isn't the Future. <span className="text-[#e60000]">It's the Present.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            While your competitors are still making decisions based on gut instinct, imagine making every business decision backed by <strong>intelligent, data-driven predictions</strong>. Our machine learning solutions don't just process data — they find the patterns humans can't see.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            From automating repetitive tasks to predicting market shifts before they happen — we give your business an <strong>unfair advantage</strong>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our AI Capabilities</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Enterprise-grade AI, startup-friendly approach</p>
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
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>From Data to Decisions</h2>
                        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Our systematic approach to AI implementation</p>
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

            {/* Use Cases */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Industry Applications</h2>
                        <p style={{ color: 'var(--text-muted)' }}>AI solutions that deliver ROI across industries</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {useCases.map((useCase, index) => (
                            <motion.span key={useCase} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full font-medium hover:border-[#e60000] hover:bg-[#e60000]/10 transition-all cursor-default"
                                style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--text-primary)' }}
                            >{useCase}</motion.span>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Data Is Talking.<br /><span className="text-[#e60000]">Are You Listening?</span></h2>
                            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>Every dataset holds insights that could transform your business. Let's unlock them together with custom AI solutions built for your specific needs.</p>
                            <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Explore AI For Your Business
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Free AI readiness assessment • No obligations • Response within 24 hours</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
