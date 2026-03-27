import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

/**
 * Defines the structure for a key feature displayed on the home page.
 */
interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
}

/**
 * Home Page Component
 * Serving as the primary landing page, it features:
 * - A hero section with South Africa-specific branding.
 * - A grid of core logistics features.
 * - An interactive "Compliance Made Simple" section with an expandable dashboard preview.
 */
const Home = () => {
    // Responsive state for mobile layout adjustments
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /**
     * Core value propositions for the South African market
     */
    const features: Feature[] = [
        {
            title: 'National Coverage',
            description: 'Reliable real-time tracking across all provinces in South Africa.',
            icon: <Globe size={40} color="var(--brand-blue-main)" />
        },
        {
            title: 'Quality Assured',
            description: 'NIST-traceable sensors provide reliable, high-precision monitoring for your cold chain.',
            icon: <Shield size={40} color="var(--brand-blue-main)" />
        },
        {
            title: 'Immediate Alerts',
            description: 'Instant SMS, Email, WhatsApp, and Voice call notifications for deviations.',
            icon: <Zap size={40} color="var(--brand-blue-main)" />
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className={`home-hero ${isMobile ? 'mobile' : ''}`}>
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text-wrapper"
                    >
                        <h1 className="hero-title">
                            South Africa's <span className="text-gradient">Cold Chain Tracking</span> Specialists
                        </h1>
                        <p className="hero-subtitle">
                            Ensuring temperature integrity for grocery stores, suppliers, and refrigerated transport. Maintain complete visibility with reliable, real-time monitoring.
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Start Tracking Today <ArrowRight size={20} />
                            </Link>
                            <Link to="/product" className="hero-btn-secondary">
                                View Solutions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="features-header">
                        <h2 className="features-title">Built for <span className="text-gradient">South African</span> Logistics</h2>
                        <p className="features-subtitle">
                            Our temperature tracking solutions are tailored for the unique demands of local retail and refrigerated trucking.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="feature-card"
                            >
                                <div className="feature-icon-wrapper">{feature.icon}</div>
                                <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Hero / Product Preview */}
            <section className="compliance-section">
                <div className="container">
                    <div className="compliance-flex-wrapper">
                        <div className="compliance-visual-content">
                            {/* 
                                Dashboard Preview Interaction:
                                Displays an expandable image on hover for desktop users.
                                Includes a subtle floating "Hover to Expand" badge.
                            */}
                            {!isMobile && (
                                <motion.div
                                    initial={{ opacity: 0.8, y: 0 }}
                                    animate={{
                                        opacity: [0.4, 0.8, 0.4],
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    whileHover={{ opacity: 0 }}
                                    className="hover-hint"
                                >
                                    <Activity size={16} /> Hover to Expand View
                                </motion.div>
                            )}

                            <motion.img
                                src="/images/website_dashboard_preview.png"
                                alt="CCTT Dashboard"
                                whileHover={isMobile ? {} : {
                                    scale: 1.8,
                                    zIndex: 50,
                                    boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
                                    transition: { duration: 0.3, ease: 'easeOut' }
                                }}
                                className="dashboard-preview"
                            />
                        </div>
                        <div className="compliance-text-content">
                            <h2 className="compliance-title">Monitoring Made Simple</h2>
                            <p className="compliance-description">
                                Ensure temperature integrity for tracking in trucks, fridges, and freezers. Our platform provides automated logs and instant proof of history.
                            </p>
                            <ul className="compliance-list">
                                <li className="compliance-list-item">
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>Temperature Cycle Logging</span>
                                </li>
                                <li className="compliance-list-item">
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>SMS, Email, WhatsApp & Voice Alerts</span>
                                </li>
                                <li className="compliance-list-item">
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>Automated Reporting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
