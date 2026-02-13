'use client';

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > 50);
    });

    useEffect(() => {
        // Route-based detection for non-homepage pages
        if (pathname === '/products') {
            setActiveLink('products');
            return;
        }
        if (pathname.startsWith('/services')) {
            setActiveLink('services');
            return;
        }

        // Scroll-based detection for homepage sections
        const handleScroll = () => {
            const sections = ['services', 'about', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveLink(id);
                        return;
                    }
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const navLinks = [
        { name: 'Services', href: '/#services', id: 'services' },
        { name: 'About', href: '/#about', id: 'about' },
        { name: 'Contact', href: '/#contact', id: 'contact' },
        { name: 'Products', href: '/products', id: 'products' },
    ];

    const pillVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.08, delayChildren: 0.2 },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -15, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 200, damping: 20 } },
    };

    return (
        <div className=" fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            style={{ paddingTop: scrolled ? '8px' : '16px', transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
            <motion.nav variants={pillVariants} initial="hidden" animate="visible" className="pointer-events-auto "
                style={{ maxWidth: scrolled ? '820px' : '960px', width: '100%', transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
                <motion.div className="navbar-pill relative "
                    animate={{
                        backgroundColor: scrolled ? 'rgba(245, 245, 247, 0.9)' : 'rgba(245, 245, 247, 0.6)',
                        borderColor: scrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.06)',
                        boxShadow: scrolled
                            ? '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 20px rgba(230, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                            : '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3">
                        <motion.div variants={linkVariants}>
                            <Link href="/#hero" className="flex items-center gap-2 group">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e60000] to-[#cc0000] flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:shadow-red-700/40 transition-shadow duration-300">
                                        <span className="text-white font-bold text-sm tracking-tighter">C</span>
                                    </div>
                                </div>
                                <span className="text-lg font-bold tracking-tight hidden sm:block">
                                    <span className="text-[#1a1a1a]">CAPS</span>
                                    <span className="text-[#e60000]">LOQUE</span>
                                </span>
                            </Link>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.id;
                                return (
                                    <motion.div key={link.name} variants={linkVariants} className="relative">
                                        <Link href={link.href}
                                            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block"
                                            style={{ color: isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.5)' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.5)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                                        >
                                            {link.name}
                                        </Link>
                                        {isActive && (
                                            <motion.div layoutId="activeNavDot" className="absolute -bottom-1 left-1/2 -translate-x-1/2" transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                                                <div className="w-1 h-1 rounded-full bg-[#e60000] shadow-[0_0_8px_rgba(230,0,0,0.6)]" />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div variants={linkVariants} className="hidden md:block">
                            <Link href="/#contact"
                                className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, #e60000, #cc0000)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(230, 0, 0, 0.4)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
                            >
                                Get Started
                                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        <motion.button variants={linkVariants} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} whileTap={{ scale: 0.92 }}
                        >
                            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-[#1a1a1a] origin-center" transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
                            <motion.span animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="w-4 h-[1.5px] bg-[#1a1a1a]" transition={{ duration: 0.15 }} />
                            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-[#1a1a1a] origin-center" transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
                        </motion.button>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 28 }} className="mt-2 mx-2 rounded-2xl overflow-hidden"
                            style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 16px 48px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="py-3 px-4 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.div key={link.name} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06, type: 'spring', stiffness: 200, damping: 20 }}>
                                        <Link href={link.href} onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/50 hover:text-[#1a1a1a] hover:bg-black/[0.04] font-medium text-sm transition-all duration-200"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-[#e60000]/60" />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.06, type: 'spring', stiffness: 200, damping: 20 }} className="pt-2">
                                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300" style={{ background: 'linear-gradient(135deg, #e60000, #cc0000)' }}>
                                        Get Started
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
