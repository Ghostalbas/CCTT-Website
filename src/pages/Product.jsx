import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Database, Cpu, HardDrive, Share2, FileText, AlertCircle } from 'lucide-react';
import '../styles/Product.css';

const Product = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hardwareSpecs = [
        { label: 'Temp Range', value: '-55°C to +90°C' },
        { label: 'Accuracy', value: '±0.5°C' },
        { label: 'Battery Life', value: '5 Years (Replaceable)' },
        { label: 'Connectivity', value: '5G' }
    ];

    const softwareFeatures = [
        { title: 'Dashboard', icon: <Activity />, desc: 'Real-time temperature telemetry with automated logging.' },
        { title: 'Always Online', icon: <Database />, desc: 'Data tracking accessible for inspection anywhere anytime.' },
        { title: 'Automated Reporting', icon: <FileText />, desc: 'Generate temperature cycle reports for trucks and freezers.' },
        { title: 'Real-Time Alerts', icon: <AlertCircle />, desc: 'Receive instant notifications when temperatures deviate from acceptable ranges.' }
    ];

    return (
        <div className="product-page">
            {/* Product Hero */}
            <section className="section-padding hero-bg-light">
                <div className="container">
                    <div className={`product-hero-flex ${isMobile ? 'mobile' : ''}`}>
                        <motion.div
                            className="product-hero-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h1 className={`product-title ${isMobile ? 'mobile' : ''}`}>Integrated <span className="text-gradient">Solutions</span></h1>
                            <p className="product-description">
                                CCTT provides a full-stack cold chain solution. From rugged sensors designed for refrigerated trucks to the professional software platform that manages your temperature logs.
                            </p>

                            <div className="hardware-specs-grid">
                                {hardwareSpecs.map((spec, idx) => (
                                    <div key={idx} className="spec-item">
                                        <p className="spec-label">{spec.label}</p>
                                        <p className="spec-value">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="product-hero-image-wrapper">
                            <img src="/images/iot_sensor.png" alt="CCTT Sensor" className="product-hero-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Software Platform Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="platform-header">
                        <h2 className="platform-title">The Platform</h2>
                        <p className="platform-subtitle">
                            A centralized hub for all your cold storage chain temperature data. Meet documentation requirements with ease.
                        </p>
                    </div>

                    <div className="platform-image-wrapper">
                        <motion.img
                            src="/images/sa_grocery_cold_storage.png"
                            alt="Retail Compliance Monitoring"
                            className="platform-image"
                        />
                    </div>

                    <div className="features-grid">
                        {softwareFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                whileHover={isMobile ? {} : { y: -10, boxShadow: 'var(--shadow-xl)', borderColor: 'var(--brand-blue-main)' }}
                                className="feature-card"
                            >
                                <div className="feature-icon-container">{f.icon}</div>
                                <h3 className="feature-title">{f.title}</h3>
                                <p className="feature-desc">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
