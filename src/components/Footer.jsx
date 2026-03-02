import React from 'react';
import { Snowflake, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--brand-navy)', color: 'white', padding: '5rem 0 2rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src="/images/company_logo.jpeg"
                                alt="CCTT Logo"
                                style={{
                                    height: '50px',
                                    width: 'auto',
                                    borderRadius: '4px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Ensuring cold chain integrity across South Africa. Specializing in temperature tracking and legal compliance for grocery retail and refrigerated transport.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link></li>
                            <li><Link to="/product" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Solution</Link></li>
                            <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Sebastian Tridente</li>
                                <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                    <Phone size={16} color="var(--brand-blue-main)" />
                                    <span>076 825 6695</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                    <Mail size={16} color="var(--brand-blue-main)" />
                                    <span>ccttseb@gmail.com</span>
                                </li>
                            </ul>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Carel Trichardt</li>
                                <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                    <Phone size={16} color="var(--brand-blue-main)" />
                                    <span>079 878 7392</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                    <Mail size={16} color="var(--brand-blue-main)" />
                                    <span>ccttcarel@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                    <p>© {new Date().getFullYear()} Cold Cycle Tracking Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
