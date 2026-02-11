'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [

        { name: 'Services', href: '/#services' },
        // { name: 'Roadmap', href: '#roadmap' },
        { name: 'About', href: '/#about' },

        { name: 'Contact', href: '#contact' },
        { name: 'Products', href: '/products' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 py-[10px] left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/#hero" className="flex items-center gap-3 group">
                        <span className="text-xl font-bold tracking-tight">
                            <span className="text-white">CAPS</span>
                            <span className="text-[#e60000]">LOQUE</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-white/60 hover:text-white font-medium transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e60000] to-[#ff4444] group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="btn-primary text-sm py-3 px-6"
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/20 rounded-lg"
                    >
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-white origin-center transition-all"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-5 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-white origin-center transition-all"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden bg-[#111111]/95 backdrop-blur-xl mt-4 rounded-xl border border-white/[0.06]"
                >
                    <div className="py-4 space-y-4 px-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-white/60 hover:text-white font-medium py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-primary block text-center"
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
