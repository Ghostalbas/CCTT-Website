import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // IMPORTANT: Replace 'YOUR_FORMSPREE_ID' with your actual Form ID from formspree.io
        const FORMSPREE_ID = 'mqedvkza';
        const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                const data = await response.json();
                console.error('Formspree Error:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission Fetch Error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contact-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
                    {/* Contact Info */}
                    <div style={{ flex: '1 1 400px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's <span className="text-gradient">Connect</span></h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--brand-gray)', marginBottom: '3rem', lineHeight: '1.8' }}>
                                Our technical team is ready to assist you in designing the perfect tracking solution for your business.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                {/* Sebastian */}
                                <div style={{ background: 'var(--brand-gray-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-blue-main)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ background: 'var(--brand-blue-main)', color: 'white', padding: '0.5rem', borderRadius: '50%' }}>
                                            <User size={20} />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Sebastian Tridente</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--brand-gray)' }}>
                                            <Mail size={18} />
                                            <a href="mailto:ccttseb@gmail.com" style={{ fontWeight: '500' }}>ccttseb@gmail.com</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--brand-gray)' }}>
                                            <Phone size={18} />
                                            <a href="tel:0768256695" style={{ fontWeight: '500' }}>076 825 6695</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Carel */}
                                <div style={{ background: 'var(--brand-gray-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-blue-dark)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ background: 'var(--brand-blue-dark)', color: 'white', padding: '0.5rem', borderRadius: '50%' }}>
                                            <User size={20} />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Carel Trichardt</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--brand-gray)' }}>
                                            <Mail size={18} />
                                            <a href="mailto:ccttcarel@gmail.com" style={{ fontWeight: '500' }}>ccttcarel@gmail.com</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--brand-gray)' }}>
                                            <Phone size={18} />
                                            <a href="tel:0798787392" style={{ fontWeight: '500' }}>079 878 7392</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.div
                            style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid #e2e8f0' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ textAlign: 'center', padding: '2rem 0' }}
                                >
                                    <div style={{ background: '#dcfce7', color: '#166534', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                        <Send size={32} />
                                    </div>
                                    <h3 style={{ marginBottom: '1rem' }}>Inquiry Sent!</h3>
                                    <p style={{ color: 'var(--brand-gray)', marginBottom: '2rem' }}>Thank you for reaching out. Sebastian or Carel will get back to you shortly.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="btn-primary"
                                        style={{ background: 'var(--brand-blue-main)' }}
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h3 style={{ marginBottom: '2rem' }}>Send an Inquiry</h3>
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Full Name</label>
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    disabled={status === 'sending'}
                                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                                />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                                                <input
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    disabled={status === 'sending'}
                                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                                />
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Company Name</label>
                                            <input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                type="text"
                                                disabled={status === 'sending'}
                                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                required
                                                disabled={status === 'sending'}
                                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <p style={{ color: '#dc2626', fontSize: '0.9rem', fontWeight: '500' }}>Oops! Something went wrong. Please try again or contact us directly.</p>
                                        )}

                                        <button
                                            type="submit"
                                            className="btn-primary"
                                            disabled={status === 'sending'}
                                            style={{ justifyContent: 'center', marginTop: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}
                                        >
                                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                                            <Send size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
