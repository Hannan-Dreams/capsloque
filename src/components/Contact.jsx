'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
    const handleFocus = (field) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formState) });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to send message');
            setSubmitted(true);
            setFormState({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>), label: 'Email', value: 'capsloqueinfo@gmail.com', href: 'mailto:capsloqueinfo@gmail.com' },
        { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), label: 'Location', value: 'Remote-First, Worldwide' },
        { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), label: 'Response Time', value: 'Within 24 Hours' },
    ];

    const socialLinks = [
        { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/capsloque/', label: 'LinkedIn', className: 'bg-[#0A66C2] border-[#0A66C2]' },
        { icon: <InstagramIcon />, href: 'https://www.instagram.com/capsloque_/', label: 'Instagram', className: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] border-[#E1306C]' },
    ];

    const labelColor = (field) => focusedField === field ? '#e60000' : 'rgba(0,0,0,0.5)';

    return (
        <section id="contact" className="section relative overflow-hidden py-24" style={{ background: 'var(--background)' }}>
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="text-[#e60000] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Let's Create <span className="gradient-text">Something Extraordinary</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Ready to transform your ideas into reality? We're here to help you navigate the future of technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4 h-full">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass p-8 flex flex-col justify-between h-full">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Info</h3>
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e60000] to-[#cc0000] flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="font-medium text-base hover:text-[#e60000] transition-colors block whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{item.value}</a>
                                            ) : (
                                                <p className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <h4 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>Follow Our Journey</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" title={social.label} className={`flex-1 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${social.className}`}>{social.icon}</a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-8 h-full">
                        <div className="glass p-8 md:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e60000] to-[#cc0000] opacity-[0.05] blur-2xl rounded-bl-full pointer-events-none" />

                            {error && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-xl text-red-400 text-center">{error}</motion.div>
                            )}

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Message Sent Successfully!</h3>
                                    <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor('name') }}>Name</label>
                                            <input type="text" name="name" value={formState.name} onChange={handleChange} onFocus={() => handleFocus('name')} onBlur={handleBlur} required className="input-glass h-14" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor('email') }}>Email</label>
                                            <input type="email" name="email" value={formState.email} onChange={handleChange} onFocus={() => handleFocus('email')} onBlur={handleBlur} required className="input-glass h-14" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor('subject') }}>Subject</label>
                                        <input type="text" name="subject" value={formState.subject} onChange={handleChange} onFocus={() => handleFocus('subject')} onBlur={handleBlur} required className="input-glass h-14" placeholder="What is this regarding?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor('message') }}>Message</label>
                                        <textarea name="message" value={formState.message} onChange={handleChange} onFocus={() => handleFocus('message')} onBlur={handleBlur} required rows={6} className="input-glass resize-none p-4" placeholder="Tell us about your project or inquiry..." />
                                    </div>
                                    <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="btn-primary w-full h-14 text-lg bg-gradient-to-r from-[#e60000] via-[#ff4b7d] to-[#e60000] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_4px_20px_rgba(230,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(230,0,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending Message...</>
                                        ) : (
                                            <>Send Message<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
