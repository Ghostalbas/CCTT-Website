import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contact-page" style={{ paddingTop: isMobile ? '80px' : '100px' }}>
            <div className="container">
                <div className="contact-flex-container">
                    {/* Contact Info */}
                    <div className="contact-info-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="contact-headline" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>Let's <span className="text-gradient">Connect</span></h1>
                            <p className="contact-description">
                                Our technical team is ready to assist you in designing the perfect tracking solution for your business.
                            </p>

                            <div className="contact-cards-list">
                                {/* Sebastian */}
                                <div className="contact-card sebastian">
                                    <div className="card-header">
                                        <div className="icon-circle blue-main">
                                            <User size={20} />
                                        </div>
                                        <h3 className="card-title">Sebastian Tridente</h3>
                                    </div>
                                    <div className="contact-details">
                                        <div className="contact-detail-item">
                                            <Mail size={18} />
                                            <a href="mailto:ccttseb@gmail.com" className="contact-link">ccttseb@gmail.com</a>
                                        </div>
                                        <div className="contact-detail-item">
                                            <Phone size={18} />
                                            <a href="tel:0768256695" className="contact-link">076 825 6695</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Carel */}
                                <div className="contact-card carel">
                                    <div className="card-header">
                                        <div className="icon-circle blue-dark">
                                            <User size={20} />
                                        </div>
                                        <h3 className="card-title">Carel Trichardt</h3>
                                    </div>
                                    <div className="contact-details">
                                        <div className="contact-detail-item">
                                            <Mail size={18} />
                                            <a href="mailto:ccttcarel@gmail.com" className="contact-link">ccttcarel@gmail.com</a>
                                        </div>
                                        <div className="contact-detail-item">
                                            <Phone size={18} />
                                            <a href="tel:0798787392" className="contact-link">079 878 7392</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-col">
                        <motion.div
                            className="form-wrapper"
                            style={{ padding: isMobile ? '1.5rem' : '3rem' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="success-message"
                                >
                                    <div className="success-icon-circle">
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
                                        <div className="form-group-row" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                                            <div className="form-group">
                                                <label className="form-label">Full Name</label>
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    disabled={status === 'sending'}
                                                    className="form-input"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email Address</label>
                                                <input
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    disabled={status === 'sending'}
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Company Name</label>
                                            <input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                type="text"
                                                disabled={status === 'sending'}
                                                className="form-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                required
                                                disabled={status === 'sending'}
                                                className="form-textarea"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <p className="error-text">Oops! Something went wrong. Please try again or contact us directly.</p>
                                        )}

                                        <button
                                            type="submit"
                                            className="btn-primary submit-btn"
                                            disabled={status === 'sending'}
                                            style={{ opacity: status === 'sending' ? 0.7 : 1 }}
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
