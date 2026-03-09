import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Truck, Settings, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const steps = [
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
            description: 'Once installed, we assist with access to and setup of your customized dashboards, automated alerts, and detailed compliance reports.',
            icon: <Settings size={40} />,
            color: 'var(--brand-blue-main)'
        }
    ];

    return (
        <div className="how-it-works-page" style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section className="section-padding" style={{ background: 'var(--brand-gray-light)', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', marginBottom: '1.5rem' }}>
                            How It <span className="text-gradient">Works</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--brand-gray)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            From hardware procurement to real-time monitoring, we ensure a seamless integration of cold chain tracking into your business operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4rem',
                        position: 'relative'
                    }}>
                        {/* Connecting Line (Desktop) */}
                        {!isMobile && (
                            <div style={{
                                position: 'absolute',
                                left: '50px',
                                top: '50px',
                                bottom: '50px',
                                width: '2px',
                                background: 'linear-gradient(to bottom, var(--brand-blue-main), var(--brand-blue-dark))',
                                opacity: 0.2,
                                zIndex: 0
                            }} />
                        )}

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                style={{
                                    display: 'flex',
                                    gap: '2.5rem',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <div style={{
                                    minWidth: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: step.color,
                                    boxShadow: 'var(--shadow-lg)',
                                    border: `2px solid ${step.color}22`
                                }}>
                                    {step.icon}
                                </div>
                                <div style={{ flex: 1, paddingTop: '1rem' }}>
                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--brand-navy)' }}>
                                        {idx + 1}. {step.title}
                                    </h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--brand-gray)', lineHeight: '1.7', maxWidth: '700px' }}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ background: 'var(--brand-navy)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            Ready to Secure Your Cold Chain?
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
                            Reach out to us for a discussion on your business needs and how we can help you with your cold cycle tracking today.
                        </p>
                        <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Contact Us <MessageSquare size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
