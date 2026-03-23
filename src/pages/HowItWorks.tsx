import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Truck, Settings, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/HowItWorks.css';

/**
 * Represents a single step in the CCTT onboarding process.
 */
interface Step {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
}

/**
 * HowItWorks Page Component
 * Outlines the three-stage process: Purchase, Delivery, and Setup/Support.
 * Uses a visual timeline (on desktop) to guide potential clients.
 */
const HowItWorks = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const steps: Step[] = [
        {
            title: 'Purchase Devices',
            description: 'Clients purchase the CCTT tracking devices directly. Our team provides guidance on the best hardware configuration for your specific business needs.',
            icon: <ShoppingCart size={40} />,
            color: 'var(--brand-blue-main)'
        },
        {
            title: 'Direct Delivery',
            description: 'Devices are shipped and delivered directly to your location. Rugged, pre-configured, and ready for installation in your fridges, freezers, or delivery vehicles.',
            icon: <Truck size={40} />,
            color: 'var(--brand-blue-dark)'
        },
        {
            title: 'Setup & Support',
            description: 'Once installed, we assist with access to and setup of your customized dashboards, automated SMS/Email/WhatsApp/Voice alerts, and detailed compliance reports.',
            icon: <Settings size={40} />,
            color: 'var(--brand-blue-main)'
        }
    ];

    return (
        <div className="how-it-works-page">
            {/* Hero Section */}
            <section className="section-padding hero-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={`hero-title ${isMobile ? 'mobile' : ''}`}>
                            How It <span className="text-gradient">Works</span>
                        </h1>
                        <p className="hero-subtitle">
                            From hardware procurement to real-time monitoring, we ensure a seamless integration of cold chain tracking into your business operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="steps-container">
                        {/* Connecting Line (Desktop) */}
                        {!isMobile && (
                            <div className="connecting-line" />
                        )}

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="step-card"
                            >
                                <div 
                                    className="step-icon-wrapper"
                                    style={{ 
                                        color: step.color,
                                        border: `2px solid ${step.color}22`
                                    }}
                                >
                                    {step.icon}
                                </div>
                                <div className="step-content">
                                    <h3 className="step-title">
                                        {idx + 1}. {step.title}
                                    </h3>
                                    <p className="step-desc">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">
                            Ready to Secure Your Cold Chain?
                        </h2>
                        <p className="cta-desc">
                            Reach out to us for a discussion on your business needs and how we can help you with your cold cycle tracking today.
                        </p>
                        <Link to="/contact" className="btn-primary cta-btn">
                            Contact Us <MessageSquare size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
