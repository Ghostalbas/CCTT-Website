import React, { useState, useEffect } from 'react';
import { Snowflake, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

/**
 * Footer Component
 * Displays company branding, quick links, and contact information.
 * Adapts layout for mobile devices using responsive state.
 */
const Footer = () => {
    // Responsive state for mobile layout adjustments
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className={`footer ${isMobile ? 'mobile' : ''}`}>
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div>
                        <div className={`footer-brand-wrapper ${isMobile ? 'mobile' : ''}`}>
                            <img
                                src="/images/company_logo.png"
                                alt="CCTT Logo"
                                className={`footer-logo ${isMobile ? 'mobile' : ''}`}
                            />
                            <span className="footer-brand-text">CCTT</span>
                        </div>
                        <p className="footer-description">
                            Ensuring cold chain integrity across South Africa. Specializing in temperature tracking and legal compliance for grocery retail and refrigerated transport.
                        </p>
                    </div>

                    {/* Navigation Links */}

                    <div>
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/product" className="footer-link">Our Solution</Link></li>
                            <li><Link to="/how-it-works" className="footer-link">How It Works</Link></li>
                            <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="footer-contact-wrapper">
                            <ul className="contact-person-list">
                                <li className="contact-name">Sebastian Tridente</li>
                                <li className="contact-info-item">
                                    <Phone size={16} color="var(--brand-blue-main)" />
                                    <span>076 825 6695</span>
                                </li>
                                <li className="contact-info-item">
                                    <Mail size={16} color="var(--brand-blue-main)" />
                                    <span>ccttseb@gmail.com</span>
                                </li>
                            </ul>
                            <ul className="contact-person-list">
                                <li className="contact-name">Carel Trichardt</li>
                                <li className="contact-info-item">
                                    <Phone size={16} color="var(--brand-blue-main)" />
                                    <span>079 878 7392</span>
                                </li>
                                <li className="contact-info-item">
                                    <Mail size={16} color="var(--brand-blue-main)" />
                                    <span>ccttcarel@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Cold Cycle Tracking Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
