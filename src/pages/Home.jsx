import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            title: 'National Coverage',
            description: 'Reliable real-time tracking across all provinces in South Africa.',
            icon: <Globe size={40} color="var(--brand-blue-main)" />
        },
        {
            title: 'Compliance Ready',
            description: 'NIST-traceable sensors meet South African legal standards for cold chain logs.',
            icon: <Shield size={40} color="var(--brand-blue-main)" />
        },
        {
            title: 'Immediate Alerts',
            description: 'Instant notifications for any temperature deviations in fridges or trucks.',
            icon: <Zap size={40} color="var(--brand-blue-main)" />
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue-dark) 100%)'
            }}>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '800px' }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            South Africa's <span className="text-gradient">Cold Chain Tracking</span> Specialists
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                            Ensuring temperature integrity for grocery stores, suppliers, and refrigerated transport. Meet legal compliance requirements with reliable, real-time monitoring.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Start Tracking Today <ArrowRight size={20} />
                            </Link>
                            <Link to="/product" style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                border: '1px solid white',
                                color: 'white',
                                borderRadius: 'var(--radius-md)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(5px)'
                            }}>
                                View Solutions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Built for <span className="text-gradient">South African</span> Logistics</h2>
                        <p style={{ color: 'var(--brand-gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Our temperature tracking solutions are tailored for the unique demands of local retail and refrigerated trucking.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'white',
                                    boxShadow: 'var(--shadow-lg)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
                                <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--brand-gray)', lineHeight: '1.7' }}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Hero / Product Preview */}
            <section style={{ padding: '6rem 0', background: 'linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)), url("/images/compliance_dashboard_preview.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Compliance Made Simple</h2>
                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: '1.8' }}>
                                Fulfill South African legal requirements for temperature tracking in trucks, fridges, and freezers. Our platform provides automated logs and instant proof of integrity.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>Legal Temperature Cycle Logging</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>Instant Fridge & Truck Alerts</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--brand-blue-main)" /> <span>Automated Monthly Compliance Reports</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <img
                                src="/images/compliance_dashboard_preview.png"
                                alt="CCTT Compliance Dashboard"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
