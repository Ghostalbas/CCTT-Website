import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Database, Cpu, HardDrive, Share2, FileText, AlertCircle } from 'lucide-react';

const Product = () => {
    const hardwareSpecs = [
        { label: 'Temp Range', value: '-40°C to +85°C' },
        { label: 'Accuracy', value: '±0.1°C' },
        { label: 'Battery Life', value: '5 Years (Replaceable)' },
        { label: 'Connectivity', value: '5G' }
    ];

    const softwareFeatures = [
        { title: 'Compliance Dashboard', icon: <Activity />, desc: 'Real-time temperature telemetry with automated retail fridge logging.' },
        { title: 'South African Legal Logs', icon: <Database />, desc: 'Secure, legally-compliant data storage accessible for inspection anywhere.' },
        { title: 'Automated Cycle Reports', icon: <FileText />, desc: 'Generate temperature cycle reports for trucks and freezers required by SA law.' },
        { title: 'Real-Time Alerts', icon: <AlertCircle />, desc: 'Receive instant notifications when temperatures deviate from acceptable ranges.' }
    ];

    return (
        <div className="product-page" style={{ paddingTop: '80px' }}>
            {/* Product Hero */}
            <section className="section-padding" style={{ background: 'var(--brand-gray-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                        <motion.div
                            style={{ flex: '1 1 500px' }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Integrated <span className="text-gradient">Compliance Solutions</span></h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--brand-gray)', lineHeight: '1.8', marginBottom: '2rem' }}>
                                CCTT provides a full-stack cold chain compliance solution. From rugged sensors designed for refrigerated trucks to the professional software platform that manages your legal temperature logs.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {hardwareSpecs.map((spec, idx) => (
                                    <div key={idx} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--brand-blue-main)', fontWeight: '700', textTransform: 'uppercase' }}>{spec.label}</p>
                                        <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div style={{ flex: '1 1 400px' }}>
                            <img src="/images/iot_sensor.png" alt="CCTT Sensor" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Software Platform Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Compliance Platform</h2>
                        <p style={{ color: 'var(--brand-gray)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            A centralized hub for all your cold storage data. Meet South African documentation requirements with ease.
                        </p>
                    </div>

                    <img
                        src="/images/sa_grocery_cold_storage.png"
                        alt="Retail Compliance Monitoring"
                        style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem' }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {softwareFeatures.map((f, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', transition: 'border-color 0.3s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ color: 'var(--brand-blue-dark)', marginBottom: '1rem' }}>{f.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{f.title}</h3>
                                <p style={{ color: 'var(--brand-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
