'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        title: 'Custom Software Development',
        description: 'End-to-end digital engineering covering Web, Mobile Apps, AI/ML integration, and enterprise-grade software solutions tailored to your specific needs.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        tags: ['Web & App', 'AI/ML', 'Enterprise'],
        gradient: 'from-[#e60000] to-[#ff4444]',
        href: '/services/web-development',
    },
    {
        title: 'Business Development',
        description: 'Strategic consulting and growth acceleration. We help businesses optimize operations, identify market opportunities, and scale effectively.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        tags: ['Strategy', 'Growth', 'Consulting'],
        gradient: 'from-[#ff6b35] to-[#ff9a76]',
        href: '/services/marketing-strategy',
    },
    {
        title: 'SEO & Digital Presence',
        description: 'Dominate search results and build a commanding online presence. Improved visibility through technical SEO, content strategy, and digital marketing.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        tags: ['SEO', 'Marketing', 'Analytics'],
        gradient: 'from-[#8b5cf6] to-[#a78bfa]',
        href: '/services/marketing-strategy',
    },
    {
        title: 'Startup MVP & Scaling',
        description: 'From concept to launch. We build robust Minimum Viable Products (MVPs) designed for rapid market entry and scalable growth.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        tags: ['Prototyping', 'Launch', 'Scale'],
        gradient: 'from-[#06b6d4] to-[#67e8f9]',
        href: '/services/web-development',
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function ServiceGrid() {
    return (
        <section id="services" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e60000] opacity-[0.03] blur-[120px] rounded-full" />
                <div className="bg-grid opacity-[0.3] absolute inset-0" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <span className="text-[#e60000] font-semibold mb-6 block uppercase tracking-[0.2em] text-sm">
                        Enterprise Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        We Engineer <span className="gradient-text">Success</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed">
                        Partner with Capsloque to build world-class digital products.
                        We combine strategy, design, and engineering to deliver exceptional results.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service) => (
                        <Link key={service.title} href={service.href} className="group block h-full">
                            <motion.div
                                variants={cardVariants}
                                className="h-full relative overflow-hidden glass-card-dark p-10"
                            >
                                {/* Hover Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            {service.icon}
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                            <span className="text-sm font-medium text-white/70">Explore</span>
                                            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e60000] transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/40 leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] text-white/60 border border-white/[0.08]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
